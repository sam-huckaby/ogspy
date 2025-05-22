import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';

export async function GET(request: Request) {
  // Log as much info as possible about the browser/request
  if (request) {
    // Log the user-agent and all headers
    const userAgent = request.headers.get('user-agent');
    console.log('User-Agent:', userAgent);

    // Log all headers
    const headersObj: Record<string, string> = {};
    for (const [key, value] of request.headers.entries()) {
      headersObj[key] = value;
    }
    console.log('Request Headers:', headersObj);

    // Log IP if available (not always available in edge runtime)
    // @ts-ignore
    if (request.ip) {
      // @ts-ignore
      console.log('Request IP:', request.ip);
    }
  }

  return new ImageResponse(
    React.createElement('div', {
      style: {
        width: '25px',
        height: '25px',
        backgroundColor: 'red',
      }
    }),
    {
      width: 25,
      height: 25,
    }
  );
} 