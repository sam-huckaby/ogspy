import { ImageResponse } from 'next/og';
import { type NextRequest } from 'next/server'
import { headers } from 'next/headers';
import React from 'react';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  // Get request information

  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || 'Unknown';
  // I need to decide exactly which headers I care to grab
  const headersObj: Record<string, string> = {};
  for (const [key, value] of headersList.entries()) {
    headersObj[key] = value;
  }

  // TypeScript's Request type does not include 'ip', so we safely access it if present
  const ip = typeof (request as { ip?: string }).ip === 'string' ? (request as { ip?: string }).ip! : 'Unknown';

  const searchParams = request.nextUrl.searchParams;
  console.log("================================================");
  console.log("User-Agent:", userAgent);
  console.log("IP:", ip);
  console.log("Headers:", headersObj);
  console.log("Search Params:", searchParams);
  console.log("================================================");

  return new ImageResponse(
    React.createElement('div', {
      style: {
        width: '1200px',
        height: '630px',
        backgroundColor: 'red',
        color: 'white',
        padding: '20px',
        fontFamily: 'monospace',
        fontSize: '14px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }
    }, [
      React.createElement('div', { key: 'ua' }, `User-Agent: ${userAgent}`),
      React.createElement('div', { key: 'ip' }, `IP: ${ip}`),
      React.createElement('div', { key: 'headers' }, 
        `Headers: ${JSON.stringify(headersObj, null, 2)}`
      ),
    ]),
    {
      width: 1200,
      height: 630,
    }
  );
} 