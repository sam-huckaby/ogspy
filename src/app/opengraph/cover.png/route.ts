import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';

export async function GET() {
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