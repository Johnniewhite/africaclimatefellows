'use client';

import { useState, useEffect } from 'react';
import { fetchPhotos } from '@/services/piwigoService';
import { PiwigoImage } from '@/types/piwigo';
import PhotoModal from './PhotoModal';
import Loading from './Loading';

interface PhotoGridProps {
  albumId: number;
}

export default function PhotoGrid({ albumId }: PhotoGridProps) {
  const [photos, setPhotos] = useState<PiwigoImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PiwigoImage | null>(null);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetchPhotos(albumId);
        setPhotos(response.result.images);
        setError(null);
      } catch (err) {
        console.error('Error fetching photos:', err);
        setError('Failed to load photos. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, [albumId]);

  const handlePhotoClick = (photo: PiwigoImage) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleDownload = async (e: React.MouseEvent, photo: PiwigoImage) => {
    e.stopPropagation(); // Prevent opening the modal
    try {
      const imageUrl = photo.element_url;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = photo.name || `photo-${photo.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-lg shadow-md inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-lg font-medium">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md inline-block max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">No photos found</h3>
          <p className="text-gray-600 dark:text-gray-300">This album doesn&apos;t contain any photos yet.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => handlePhotoClick(photo)}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={photo.derivatives.medium ? photo.derivatives.medium.url : photo.element_url}
                alt={photo.name || 'Photo'}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay with download button on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <button
                  onClick={(e) => handleDownload(e, photo)}
                  className="bg-white text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100"
                  aria-label="Download photo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            </div>
            
            {photo.name && (
              <div className="p-4">
                <h3 className="font-medium text-sm truncate">{photo.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {new Date(photo.date_available).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </>
  );
} 