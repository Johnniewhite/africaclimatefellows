import { NextRequest, NextResponse } from 'next/server';

const PIWIGO_API_URL = 'https://gallery.africaclimatefellows.com/ws.php';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters from the request
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

    // Create URL for Piwigo API
    const url = new URL(PIWIGO_API_URL);
    url.searchParams.append('method', 'pwg.categories.getImages');
    url.searchParams.append('format', 'json');
    url.searchParams.append('cat_id', albumId);
    url.searchParams.append('page', page);
    url.searchParams.append('per_page', perPage);

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    );
  }
} 