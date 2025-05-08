import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  return new NextResponse(
    JSON.stringify({
      applinks: {
        details: [{
          appIDs: ["78U3X38B3F.com.hellogoodman.friday2"],
          components: [{
            "/": "/*",
            comment: "Matches any url with a path starting with / "
          }]
        }]
      }
    }),
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
} 