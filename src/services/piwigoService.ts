import { PiwigoCategoriesResponse, PiwigoImagesResponse, PiwigoCategoryResponse } from '@/types/piwigo';

/**
 * Fetch all albums (categories) from Piwigo through our API route
 */
export async function fetchAlbums(): Promise<PiwigoCategoriesResponse> {
  const response = await fetch('/api/piwigo/albums');
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  
  return response.json() as Promise<PiwigoCategoriesResponse>;
}

/**
 * Fetch information about a specific album
 */
export async function fetchAlbumInfo(albumId: number): Promise<PiwigoCategoryResponse> {
  const url = new URL('/api/piwigo/album', window.location.origin);
  url.searchParams.append('albumId', albumId.toString());
  
  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  
  return response.json() as Promise<PiwigoCategoryResponse>;
}

/**
 * Fetch photos in a specific album from Piwigo through our API route
 */
export async function fetchPhotos(albumId: number, page: number = 0, perPage: number = 100): Promise<PiwigoImagesResponse> {
  const url = new URL('/api/piwigo/photos', window.location.origin);
  url.searchParams.append('albumId', albumId.toString());
  url.searchParams.append('page', page.toString());
  url.searchParams.append('perPage', perPage.toString());
  
  const response = await fetch(url.toString());
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  
  return response.json() as Promise<PiwigoImagesResponse>;
} 