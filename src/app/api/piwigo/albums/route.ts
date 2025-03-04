import { NextResponse } from 'next/server';
import { PiwigoCategoriesResponse } from '@/types/piwigo';

// API endpoint for Piwigo
const API_URL = process.env.PIWIGO_API_URL || 'https://gallery.africaclimatefellows.org/ws.php';

/**
 * GET handler for /api/piwigo/albums
 * Fetches all albums from Piwigo
 */
export async function GET() {
  try {
    const response = await fetch(`${API_URL}?format=json&method=pwg.categories.getList`, {
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch albums: ${response.status}` },
        { status: response.status }
      );
    }

    const data: PiwigoCategoriesResponse = await response.json();

    if (data.stat !== 'ok') {
      return NextResponse.json(
        { error: 'Failed to fetch albums from Piwigo' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching albums:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 