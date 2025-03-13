import { NextResponse } from 'next/server';

// Add this line to make the route compatible with static exports
export const dynamic = "force-static";

const PIWIGO_API_URL = 'https://gallery.africaclimatefellows.com/ws.php';

export async function GET() {
  try {
    const url = new URL(PIWIGO_API_URL);
    url.searchParams.append('method', 'pwg.categories.getList');
    url.searchParams.append('format', 'json');

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`API call failed: ${response.statusText}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching albums:', error);
    return NextResponse.json(
      { error: 'Failed to fetch albums' },
      { status: 500 }
    );
  }
} 