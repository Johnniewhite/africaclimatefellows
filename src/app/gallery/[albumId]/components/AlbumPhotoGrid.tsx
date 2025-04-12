"use client";

import { useState, useEffect } from 'react';
import { PiwigoImage } from '@/types/piwigo';
import { fetchPhotos } from '@/services/piwigoService';
import Image from 'next/image';
import PhotoModal from '../../components/PhotoModal'; // Adjust path if needed
import Loading from '../../components/Loading'; // Adjust path if needed
import Masonry from 'react-masonry-css'; // Import Masonry

interface AlbumPhotoGridProps {
  initialPhotos: PiwigoImage[];
  albumId: number;
  initialHasMore?: boolean; // Optional: Pass info from server if known
  photosPerPage?: number; // Allow configuration
}

const PHOTOS_PER_PAGE = 50; // Default number of photos to fetch per page

export default function AlbumPhotoGrid({
  initialPhotos,
  albumId,
  initialHasMore = true, // Assume more photos exist initially unless told otherwise
  photosPerPage = PHOTOS_PER_PAGE,
}: AlbumPhotoGridProps) {
  const [photos, setPhotos] = useState<PiwigoImage[]>(initialPhotos);
  const [page, setPage] = useState<number>(1); // Start at page 1 (page 0 was initial load)
  const [hasMore, setHasMore] = useState<boolean>(
    initialPhotos.length < photosPerPage ? false : initialHasMore
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PiwigoImage | null>(null);

  const loadMorePhotos = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetchPhotos(albumId, page, photosPerPage);
      if (response.stat === 'ok') {
        const newPhotos = response.result.images;
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
        setPage((prevPage) => prevPage + 1);
        // If fewer photos than requested are returned, assume no more pages
        if (newPhotos.length < photosPerPage) {
          setHasMore(false);
        }
      } else {
        console.error('Piwigo API error on load more:', response);
        setError('Failed to load more photos.');
        setHasMore(false); // Stop trying if there's an error
      }
    } catch (err) {
      console.error('Error loading more photos:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      setHasMore(false); // Stop trying if there's an error
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoClick = (photo: PiwigoImage) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  // Define breakpoints for masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid" // Class from globals.css
        columnClassName="my-masonry-grid_column" // Class from globals.css
      >
        {photos.map((photo) => (
          <div 
            key={photo.id}
            className="group relative mb-4 cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 block" // Ensure block display for masonry item
            onClick={() => handlePhotoClick(photo)}
          >
            <Image
              // Prefer medium or large derivative for better quality in grid
              src={photo.derivatives?.medium?.url || photo.derivatives?.large?.url || photo.element_url}
              alt={photo.name || 'Photo'}
              width={photo.derivatives?.medium?.width || photo.derivatives?.large?.width || 500} // Provide width hint
              height={photo.derivatives?.medium?.height || photo.derivatives?.large?.height || 500} // Provide height hint
              sizes="(max-width: 500px) 100vw, (max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" // Adjust based on breakpoints
              className="w-full h-auto object-contain block transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => { 
                if (e.currentTarget.src !== '/placeholder-image.png') {
                  e.currentTarget.src = '/placeholder-image.png'; 
                }
              }} 
            />
             {/* Overlay with title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <p className="text-white text-sm font-medium truncate">{photo.name || 'Untitled'}</p>
            </div>
          </div>
        ))}
      </Masonry>

      {/* Load More Button & Indicators */}
      <div className="text-center my-12">
        {loading && <Loading />}
        {error && (
          <p className="text-red-600 dark:text-red-400 mb-4">Error: {error}</p>
        )}
        {hasMore && !loading && (
          <button
            onClick={loadMorePhotos}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            Load More Photos
          </button>
        )}
        {!hasMore && photos.length > 0 && !loading && (
          <p className="text-gray-500 dark:text-gray-400">End of album.</p>
        )}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </>
  );
} 