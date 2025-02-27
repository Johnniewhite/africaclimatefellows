'use client';

import { useEffect, useState } from 'react';
import { PiwigoImage } from '@/types/piwigo';

interface PhotoModalProps {
  photo: PiwigoImage;
  onClose: () => void;
}

export default function PhotoModal({ photo, onClose }: PhotoModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Get the largest available derivative or use the original image
  const getImageUrl = () => {
    if (photo.derivatives.xxlarge) return photo.derivatives.xxlarge.url;
    if (photo.derivatives.xlarge) return photo.derivatives.xlarge.url;
    if (photo.derivatives.large) return photo.derivatives.large.url;
    return photo.element_url;
  };

  // Handle image download
  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const imageUrl = getImageUrl();
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
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4">
      <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col rounded-lg overflow-hidden shadow-2xl">
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
          </div>
        )}
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 hover:scale-110"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Download button */}
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className="absolute top-4 left-4 z-20 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Download"
        >
          {isDownloading ? (
            <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full"></div>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          )}
        </button>
        
        {/* Image container */}
        <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center">
          <img
            src={getImageUrl()}
            alt={photo.name || 'Photo'}
            className="max-h-full max-w-full object-contain transition-opacity duration-300"
            style={{ opacity: isLoading ? 0 : 1 }}
            loading="eager"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        
        {/* Caption */}
        {(photo.name || photo.comment) && (
          <div className="bg-white dark:bg-gray-800 p-5 rounded-b-lg">
            {photo.name && <h3 className="text-xl font-semibold">{photo.name}</h3>}
            {photo.comment && <p className="text-gray-600 dark:text-gray-300 mt-2">{photo.comment}</p>}
            <div className="flex justify-between items-center mt-3">
              <div className="text-sm text-gray-500">
                {new Date(photo.date_available).toLocaleDateString()}
              </div>
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center gap-2"
              >
                {isDownloading ? 'Downloading...' : 'Download'}
                {!isDownloading && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 