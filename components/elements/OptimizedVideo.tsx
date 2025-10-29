/**
 * Optimized Video Component
 * 
 * This component provides optimized video delivery with:
 * - Lazy loading (loads only when in viewport)
 * - Poster image support (shows thumbnail while loading)
 * - Reduced initial data transfer
 * - Better performance for background/autoplay videos
 * 
 * Usage:
 * <OptimizedVideo 
 *   src="/assets/video/video.mp4" 
 *   poster="/assets/img/poster.jpg"
 *   autoPlay
 *   muted
 *   loop
 * />
 */
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface OptimizedVideoProps {
  src: string
  poster?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  className?: string
  style?: React.CSSProperties
  preload?: 'none' | 'metadata' | 'auto'
  onError?: () => void
}

export default function OptimizedVideo({
  src,
  poster,
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  className = '',
  style = {},
  preload = 'metadata',
  onError,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPoster, setShowPoster] = useState(true)

  useEffect(() => {
    // For autoplay videos, load immediately
    // For others, use Intersection Observer for lazy loading
    if (autoPlay) {
      setIsVisible(true)
    } else {
      const currentContainer = containerRef.current
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
              // Unobserve after first trigger
              if (currentContainer) {
                observer.unobserve(currentContainer)
              }
            }
          })
        },
        {
          rootMargin: '50px', // Start loading 50px before entering viewport
        }
      )

      if (currentContainer) {
        observer.observe(currentContainer)
      }

      return () => {
        if (currentContainer) {
          observer.unobserve(currentContainer)
        }
      }
    }
  }, [autoPlay])

  // Hide poster when video starts playing
  useEffect(() => {
    const video = videoRef.current
    if (video && poster) {
      const handlePlay = () => setShowPoster(false)
      const handleLoadStart = () => {
        setIsLoaded(true)
        if (autoPlay) setShowPoster(false)
      }

      video.addEventListener('play', handlePlay)
      video.addEventListener('loadeddata', handleLoadStart)

      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('loadeddata', handleLoadStart)
      }
    }
  }, [poster, autoPlay, isVisible])

  const handleError = () => {
    if (onError) {
      onError()
    } else {
      console.error(`Failed to load video: ${src}`)
    }
  }

  return (
    <div
      ref={containerRef}
      className={`video-container ${className}`}
      style={{ position: 'relative', width: '100%', height: '100%', ...style }}
    >
      {/* Poster image - shows before video loads */}
      {poster && showPoster && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        >
          <Image
            src={poster}
            alt="Video poster"
            fill
            style={{ objectFit: 'cover' }}
            priority={autoPlay}
            quality={85}
            sizes="100vw"
          />
        </div>
      )}

      {/* Video element - only render when visible or autoplay */}
      {(isVisible || autoPlay) && (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          preload={preload}
          onError={handleError}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: showPoster ? 0 : 1,
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  )
}

