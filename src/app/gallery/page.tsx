import { Suspense } from 'react';
import Loading from './components/Loading';
import GalleryClient from './components/GalleryClient';

export const metadata = {
  title: 'Gallery | Africa Climate Fellows',
  description: 'Browse photos from Africa Climate Fellows events and activities',
};

// Make this page static for export
export const dynamic = "force-static";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500">
          Photo Gallery
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore photos from Africa Climate Fellows events, activities, and community engagements.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex h-1 bg-gradient-to-r from-green-600 to-blue-500 rounded-full w-24"></div>
        </div>
      </div>
      
      <Suspense fallback={<Loading />}>
        <GalleryClient />
      </Suspense>
    </div>
  );
} 