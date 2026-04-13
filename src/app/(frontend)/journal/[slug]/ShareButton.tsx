'use client'

import React, { useState } from 'react'

interface ShareButtonProps {
  title: string
  url: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [label, setLabel] = useState('Share →')

  async function handleShare(e: React.MouseEvent) {
    e.preventDefault()

    const shareData = {
      title: title,
      text: `Check out this article: ${title}`,
      url: url,
    }

    // Try native share first
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
        return
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err)
        } else {
          return // User cancelled
        }
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(url)
      setLabel('Link copied!')
      setTimeout(() => setLabel('Share →'), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <a href="#" className="art-hero__share" onClick={handleShare}>
      {label}
    </a>
  )
}
