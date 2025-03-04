import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const albumId = searchParams.get('albumId');

    if (!albumId) {
      return NextResponse.json(
        { error: 'Album ID is required' },
        { status: 400 }
      );
    }

    // Fetch album data from Piwigo API
    const apiUrl = `https://gallery.africaclimatefellows.com/ws.php?method=pwg.categories.getList&format=json&cat_id=${albumId}`;
    
    const response = await fetch(apiUrl, { cache: 'no-store' });
    
    if (!response.ok) {
      throw new Error(`Piwigo API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Extract the first category from the response
    if (data.result.categories && data.result.categories.length > 0) {
      return NextResponse.json({
        stat: 'ok',
        result: data.result.categories[0]
      });
    } else {
      return NextResponse.json(
        { error: 'Album not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error fetching album:', error);
    return NextResponse.json(
      { error: 'Failed to fetch album' },
      { status: 500 }
    );
  }
} 