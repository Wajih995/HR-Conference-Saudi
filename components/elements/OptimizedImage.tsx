/**
 * Optimized Image Component Wrapper
 * 
 * This component wraps Next.js Image for optimized image delivery.
 * Use this instead of regular <img> tags to reduce data transfer.
 * 
 * Usage:
 * <OptimizedImage 
 *   src="/assets/img/path/to/image.jpg" 
 *   alt="Description"
 *   width={800}
 *   height={600}
 * />
 */
'use client'

import Image from 'next/image'
import { CSSProperties } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  style?: CSSProperties
  fill?: boolean
  priority?: boolean
  quality?: number
  sizes?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  fill = false,
  priority = false,
  quality = 85,
  sizes,
}: OptimizedImageProps) {
  // If fill is true, use the fill prop
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={style}
        priority={priority}
        quality={quality}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      />
    )
  }

  // Otherwise, require width and height
  if (!width || !height) {
    console.warn('OptimizedImage: width and height are required when fill is false')
    // Fallback to regular img for backwards compatibility
    return <img src={src} alt={alt} className={className} style={style} />
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      priority={priority}
      quality={quality}
      sizes={sizes}
    />
  )
}
