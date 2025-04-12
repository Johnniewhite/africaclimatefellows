'use client';

import { useState, useEffect } from 'react';
// import AlbumGrid from './AlbumGrid'; // Remove AlbumGrid import
import Loading from './Loading';
import { PiwigoCategory } from '@/types/piwigo';
import { fetchAlbums } from '@/services/piwigoService';
import AlbumCard from './AlbumCard'; // Import the new AlbumCard component

export default function GalleryClient() {
  const [albums, setAlbums] = useState<PiwigoCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAlbums = async () => {
      try {
        setLoading(true);
        // Use the fetchAlbums service instead of direct fetch
        const data = await fetchAlbums();
        
        // fetchAlbums already returns the parsed data
        if (data.stat === 'ok') {
          setAlbums(data.result.categories);
          setError(null);
        } else {
          // Throw a generic error if Piwigo response status is not 'ok'
          console.error('Piwigo API error:', data); // Log the full response for debugging
          throw new Error('Failed to fetch albums from Piwigo API');
        }

      } catch (err) {
        console.error('Error fetching albums:', err);
        const errorMessage = err instanceof Error ? err.message : 'Failed to load albums. Please try again later.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadAlbums();
  }, []);

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

  // Render the grid of AlbumCards
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
} 