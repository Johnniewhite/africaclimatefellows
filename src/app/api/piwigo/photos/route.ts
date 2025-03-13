import { NextRequest, NextResponse } from 'next/server';

// Make this route static for export
export const dynamic = "force-static";

const PIWIGO_API_URL = 'https://gallery.africaclimatefellows.com/ws.php';

// For static export, we'll create a static response
export async function GET() {
  try {
    // Return a static response for the static export
    // In a real app, you might want to pre-generate data for common album IDs
    return NextResponse.json({
      result: {
        images: []
      },
      stat: 'ok'
    });
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    );
  }
} 