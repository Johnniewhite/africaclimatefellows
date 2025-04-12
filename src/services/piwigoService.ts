import { PiwigoCategoriesResponse, PiwigoImagesResponse } from '@/types/piwigo';

// Helper to get the base API URL
const getBaseUrl = () => {
  // Browser-side: Use the actual origin of the page
  if (typeof window !== 'undefined' && window.location) {
    return window.location.origin;
  }
  
  // Server-side only from here
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }
  
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  return 'http://localhost:3000';
};

/**
 * Fetch all albums (categories) from Piwigo through our API route
 */
export async function fetchAlbums(): Promise<PiwigoCategoriesResponse> {
  const baseUrl = getBaseUrl();
  const apiUrl = `${baseUrl}/api/piwigo/albums`;
  console.log(`Fetching albums from: ${apiUrl}`); // Add logging
  const response = await fetch(apiUrl);
  
  if (!response.ok) {
    console.error('Fetch albums failed:', response.status, response.statusText); // Add logging
    throw new Error(`API call failed: ${response.statusText}`);
  }
  
  return response.json() as Promise<PiwigoCategoriesResponse>;
}

/**
 * Fetch photos in a specific album from Piwigo through our API route
 */
export async function fetchPhotos(albumId: number, page: number = 0, perPage: number = 100): Promise<PiwigoImagesResponse> {
  const baseUrl = getBaseUrl();
  // Construct the URL using the base URL and path
  const apiUrl = new URL('/api/piwigo/photos', baseUrl);
  apiUrl.searchParams.append('albumId', albumId.toString());
  apiUrl.searchParams.append('page', page.toString());
  apiUrl.searchParams.append('perPage', perPage.toString());
  
  console.log(`Fetching photos from: ${apiUrl.toString()}`); // Add logging
  const response = await fetch(apiUrl.toString());
  
  if (!response.ok) {
    console.error('Fetch photos failed:', response.status, response.statusText); // Add logging
    throw new Error(`API call failed: ${response.statusText}`);
  }
  
  return response.json() as Promise<PiwigoImagesResponse>;
} 