import { NextRequest, NextResponse } from 'next/server';
import { PiwigoImagesResponse } from '@/types/piwigo';

// API endpoint for Piwigo
const API_URL = process.env.PIWIGO_API_URL || 'https://gallery.africaclimatefellows.org/ws.php';

/**
 * GET handler for /api/piwigo/photos
 * Fetches photos for a specific album from Piwigo
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const albumId = searchParams.get('albumId');
    const page = searchParams.get('page') || '0';
    const perPage = searchParams.get('perPage') || '100';

    if (!albumId) {
      return NextResponse.json(
        { error: 'Album ID is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${API_URL}?format=json&method=pwg.categories.getImages&cat_id=${albumId}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch photos: ${response.status}` },
        { status: response.status }
      );
    }

    const data: PiwigoImagesResponse = await response.json();

    if (data.stat !== 'ok') {
      return NextResponse.json(
        { error: 'Failed to fetch photos from Piwigo' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 