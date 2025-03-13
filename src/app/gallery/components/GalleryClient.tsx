'use client';

import { useState, useEffect } from 'react';
import AlbumGrid from './AlbumGrid';
import Loading from './Loading';
import { PiwigoCategory } from '@/types/piwigo';

export default function GalleryClient() {
  const [albums, setAlbums] = useState<PiwigoCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        setLoading(true);
        // Use the fetchAlbums service or fetch directly
        const response = await fetch('https://gallery.africaclimatefellows.com/ws.php?method=pwg.categories.getList&format=json');
        
        if (!response.ok) {
          throw new Error(`API call failed: ${response.statusText}`);
        }
        
        const data = await response.json();
        setAlbums(data.result.categories);
        setError(null);
      } catch (err) {
        console.error('Error fetching albums:', err);
        setError('Failed to load albums. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
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

  return <AlbumGrid albums={albums} />;
} 