import { NextRequest, NextResponse } from 'next/server';

// Remove static export configuration
// export const dynamic = "force-static";

const PIWIGO_API_URL = 'https://gallery.africaclimatefellows.com/ws.php';

// Add CORS headers helper
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

// Add OPTIONS handler for CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

// Update GET handler to be dynamic and fetch from Piwigo
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const albumId = searchParams.get('albumId');
  const page = searchParams.get('page') || '0'; // Default to page 0
  const perPage = searchParams.get('perPage') || '100'; // Default to 100 per page

  if (!albumId) {
    return NextResponse.json(
      { error: 'Missing albumId parameter' },
      { 
        status: 400,
        headers: corsHeaders()
      }
    );
  }

  try {
    const url = new URL(PIWIGO_API_URL);
    url.searchParams.append('method', 'pwg.categories.getImages');
    url.searchParams.append('format', 'json');
    url.searchParams.append('cat_id', albumId); 
    url.searchParams.append('page', page);
    url.searchParams.append('per_page', perPage);

    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`Piwigo API call failed: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data, {
      headers: corsHeaders()
    });
    
  } catch (error) {
    console.error('Error fetching photos:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch photos';
    return NextResponse.json(
      { error: errorMessage },
      { 
        status: 500,
        headers: corsHeaders()
      }
    );
  }
} 