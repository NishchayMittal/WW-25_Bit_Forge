'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// Quick drop-in replacement for your existing video tags
interface LazyVideoProps {
  src: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export const LazyVideo = ({ src, className = "", poster, ...props }: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded]);

  return (
    <div ref={videoRef} className={`relative ${className}`}>
      {isVisible ? (
        <video
          {...props}
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
          muted
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          {poster ? (
            <Image src={poster} alt="Video thumbnail" fill className="object-cover" />
          ) : (
            <div className="text-gray-500">Loading video...</div>
          )}
        </div>
      )}
    </div>
  );
};

// Quick drop-in replacement for your existing img tags
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
}

export const LazyImage = ({ src, alt, className = "", ...props }: LazyImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      quality={75}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  );
};

export default LazyVideo;
