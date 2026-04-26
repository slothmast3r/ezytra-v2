import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Ezytra — Design & Development'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0b0b0c',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 18,
            color: '#555',
            letterSpacing: '0.2em',
            marginBottom: 28,
            display: 'flex',
            textTransform: 'uppercase',
          }}
        >
          ezytra.com
        </div>
        <div
          style={{
            fontSize: 62,
            fontWeight: 700,
            color: '#f2f2f0',
            lineHeight: 1.1,
            display: 'flex',
          }}
        >
          Oskar Straszyński
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#777',
            marginTop: 18,
            display: 'flex',
          }}
        >
          Designer &amp; Developer — Warsaw
        </div>
      </div>
    ),
    { ...size },
  )
}
