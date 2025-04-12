"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PiwigoCategory } from '@/types/piwigo';
import { Camera } from 'lucide-react';

interface AlbumCardProps {
  album: PiwigoCategory;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  // Use a placeholder if thumbnail URL is missing
  const thumbnailUrl = album.tn_url || '/placeholder-image.png'; // Ensure you have a placeholder image

  return (
    <Link href={`/gallery/${album.id}`} legacyBehavior={false}>
      <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer aspect-square flex flex-col">
        <div className="relative w-full h-2/3 overflow-hidden">
          {album.tn_url ? (
             <Image
                src={thumbnailUrl}
                alt={`Thumbnail for ${album.name}`}
                fill // Use fill for responsive sizing within the container
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Provide sizes for optimization
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={false} // Thumbnails are usually not critical for LCP
                onError={(e) => {
                  // Optional: Handle image loading errors, e.g., show placeholder
                  e.currentTarget.src = '/placeholder-image.png';
                }}
             />
          ) : (
            // Placeholder for albums without thumbnails
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <Camera className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
          )}
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-base leading-tight truncate group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
              {album.name || 'Untitled Album'}
            </h3>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {album.nb_images} {album.nb_images === 1 ? 'photo' : 'photos'}
          </div>
        </div>
      </div>
    </Link>
  );
}

// Ensure you have a placeholder image at public/placeholder-image.png or similar path 