'use client';

import { useState } from 'react';
import { PiwigoCategory } from '@/types/piwigo';
import PhotoGrid from './PhotoGrid';

interface AlbumGridProps {
  albums: PiwigoCategory[];
}

export default function AlbumGrid({ albums }: AlbumGridProps) {
  const [selectedAlbum, setSelectedAlbum] = useState<PiwigoCategory | null>(null);

  // Function to handle album click
  const handleAlbumClick = (album: PiwigoCategory) => {
    setSelectedAlbum(album);
    // Scroll to top when an album is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to go back to albums view
  const handleBackClick = () => {
    setSelectedAlbum(null);
  };

  // If an album is selected, show its photos
  if (selectedAlbum) {
    return (
      <div>
        <button 
          onClick={handleBackClick}
          className="mb-8 flex items-center gap-2 text-green-600 dark:text-green-400 hover:underline font-medium transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Albums
        </button>
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">{selectedAlbum.name}</h2>
          {selectedAlbum.comment && (
            <p className="text-gray-600 dark:text-gray-300">{selectedAlbum.comment}</p>
          )}
          <div className="flex items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {new Date(selectedAlbum.date_last).toLocaleDateString()}
            <span className="mx-3">•</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
              <polygon points="12 15 17 21 7 21 12 15"></polygon>
            </svg>
            {selectedAlbum.total_nb_images} {selectedAlbum.total_nb_images === 1 ? 'photo' : 'photos'}
          </div>
        </div>
        
        <PhotoGrid albumId={selectedAlbum.id} />
      </div>
    );
  }

  // Otherwise, show the albums grid
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Albums</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div 
            key={album.id} 
            className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            onClick={() => handleAlbumClick(album)}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={album.tn_url}
                alt={album.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <div className="flex items-center space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                    <polygon points="12 15 17 21 7 21 12 15"></polygon>
                  </svg>
                  <span className="text-sm">{album.total_nb_images}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{album.name}</h3>
              {album.comment && (
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{album.comment}</p>
              )}
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Last updated: {new Date(album.date_last).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 