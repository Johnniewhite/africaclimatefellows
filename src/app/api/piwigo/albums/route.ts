import { NextResponse } from 'next/server';

// Remove static export configuration for consistency
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
    return NextResponse.json(data, { 
      headers: corsHeaders()
    });
  } catch (error) {
    console.error('Error fetching albums:', error);
    return NextResponse.json(
      { error: 'Failed to fetch albums' },
      { 
        status: 500,
        headers: corsHeaders()
      }
    );
  }
} 