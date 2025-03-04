'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchAlbumInfo } from '@/services/piwigoService';
import { PiwigoCategory } from '@/types/piwigo';
import PhotoGrid from '../../components/PhotoGrid';
import Loading from '../../components/Loading';
import LanguageSelectorWrapper from '../../components/LanguageSelectorWrapper';

interface AlbumPageProps {
  params: {
    id: string;
  };
}

export default function AlbumPage({ params }: AlbumPageProps) {
  const albumId = parseInt(params.id);
  const [album, setAlbum] = useState<PiwigoCategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAlbumInfo = async () => {
      try {
        setLoading(true);
        const response = await fetchAlbumInfo(albumId);
        setAlbum(response.result);
        setError(null);
      } catch (err) {
        console.error('Error fetching album info:', err);
        setError('Failed to load album information. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadAlbumInfo();
  }, [albumId]);

  if (loading) {
    return <Loading />;
  }

  if (error || !album) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-6 rounded-lg shadow-md inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <h2 className="text-xl font-bold mb-2"><LanguageSelectorWrapper textKey="album.error" /></h2>
          <p className="mb-4">{error}</p>
          <Link href="/gallery" className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors">
            <LanguageSelectorWrapper textKey="album.backToGallery" />
          </Link>
        </div>
      </div>
    );
  }

  // Format the date properly
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/gallery" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <LanguageSelectorWrapper textKey="albums.backToAlbums" />
        </Link>
        <h1 className="text-3xl font-bold mb-2">{album.name}</h1>
        {album.comment && (
          <div className="text-gray-600 dark:text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: album.comment }} />
        )}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <LanguageSelectorWrapper textKey="albums.lastUpdated" />: {formatDate(album.date_last)}
        </div>
      </div>
      <PhotoGrid albumId={albumId} />
    </div>
  );
} 