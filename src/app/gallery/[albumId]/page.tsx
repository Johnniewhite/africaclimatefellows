import { Suspense } from 'react';
import Loading from '../components/Loading'; // Corrected path
import AlbumPhotoGrid from './components/AlbumPhotoGrid'; // Import the new component
import { fetchPhotos } from '@/services/piwigoService';
import { PiwigoImage } from '@/types/piwigo';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// TODO: Fetch album details (name) - requires adjusting album API or new service
// TODO: Implement proper error handling if fetches fail

interface AlbumPageProps {
  params: {
    albumId: string;
  };
}

// Decide on Revalidation strategy if needed (e.g., time-based)
// export const revalidate = 3600; // Revalidate every hour

const PHOTOS_PER_PAGE = 50; // Define consistently

async function fetchAlbumData(albumId: number): Promise<{ photos: PiwigoImage[], hasMore: boolean }> {
  try {
    const photosResponse = await fetchPhotos(albumId, 0, PHOTOS_PER_PAGE); // Fetch initial page (page 0)
    if (photosResponse.stat === 'ok') {
      const photos = photosResponse.result.images;
      // Determine if more photos *might* exist based on this initial fetch
      const hasMore = photos.length === PHOTOS_PER_PAGE;
      return { photos, hasMore };
    } else {
      console.error(`Failed to fetch photos for album ${albumId}:`, photosResponse);
      return { photos: [], hasMore: false }; // Return empty state on error
    }
  } catch (error) {
    console.error(`Error fetching data for album ${albumId}:`, error);
    return { photos: [], hasMore: false }; // Return empty state on error
  }
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const albumId = parseInt(params.albumId, 10);

  if (isNaN(albumId)) {
    // TODO: Improve error display - maybe use notFound() from next/navigation
    return <div className="container mx-auto px-4 py-12 text-center">Invalid Album ID</div>; 
  }

  // Fetch initial data including whether more photos might exist
  const { photos: initialPhotos, hasMore: initialHasMore } = await fetchAlbumData(albumId);
  
  // Placeholder for Album Name - Fetching this needs implementation
  const albumName = `Album ${albumId}`; 

  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/gallery"
        className="inline-flex items-center text-primary dark:text-primary-light hover:underline mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Albums
      </Link>
      
      <h1 className="text-3xl font-bold mb-8">
        {albumName} {/* Replace with fetched name */}
      </h1>

      {/* Use the client component for the interactive grid */}
       
      <Suspense fallback={<Loading />}>
         <AlbumPhotoGrid 
            initialPhotos={initialPhotos} 
            albumId={albumId} 
            initialHasMore={initialHasMore}
            photosPerPage={PHOTOS_PER_PAGE}
          /> 
      </Suspense>
      
      {/* Remove the temporary simple display */}
      {/* 
      {initialPhotos.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {initialPhotos.map(photo => (
            // ... old temporary image display ...
          ))}
        </div>
      ) : (
         <p className="text-center text-gray-500 dark:text-gray-400 py-8">No photos found in this album.</p>
      )}
      */}
    </div>
  );
} 