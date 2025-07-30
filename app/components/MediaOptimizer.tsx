'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

interface OptimizedVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  preload?: "none" | "metadata" | "auto";
}

// Optimized Image Component with lazy loading and WebP support
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  placeholder = "empty",
  blurDataURL
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  // Try WebP first, fallback to original
  useEffect(() => {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const img = new window.Image();
    
    img.onload = () => {
      setImgSrc(webpSrc);
    };
    
    img.onerror = () => {
      setImgSrc(src); // Fallback to original
    };
    
    img.src = webpSrc;
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

// Optimized Video Component with lazy loading
export const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  className = "",
  autoPlay = false,
  loop = false,
  muted = true,
  controls = false,
  poster,
  preload = "metadata"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      // Try WebM first, fallback to MP4
      const webmSrc = src.replace(/\.mp4$/i, '.webm');
      const video = document.createElement('video');
      
      video.oncanplay = () => {
        setVideoSrc(webmSrc);
      };
      
      video.onerror = () => {
        setVideoSrc(src); // Fallback to original MP4
      };
      
      video.src = webmSrc;
    }
  }, [isInView, src]);

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={autoPlay && isInView}
        loop={loop}
        muted={muted}
        controls={controls}
        poster={poster}
        preload={preload}
        playsInline
      >
        {videoSrc && <source src={videoSrc} type="video/webm" />}
        {videoSrc && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
      {!isInView && poster && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500">Loading video...</div>
        </div>
      )}
    </div>
  );
};

// Progressive JPEG loader for large images
export const ProgressiveImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load low quality first
    const lowQualitySrc = src.replace(/\.(jpg|jpeg)$/i, '_low.jpg');
    const highQualitySrc = src;

    const lowQualityImg = new window.Image();
    lowQualityImg.onload = () => {
      setCurrentSrc(lowQualitySrc);
      
      // Then load high quality
      const highQualityImg = new window.Image();
      highQualityImg.onload = () => {
        setCurrentSrc(highQualitySrc);
        setIsLoaded(true);
      };
      highQualityImg.src = highQualitySrc;
    };
    lowQualityImg.src = lowQualitySrc;
  }, [src]);

  if (!currentSrc) {
    return (
      <div className={`bg-gray-200 animate-pulse ${className}`}>
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
      </div>
    );
  }

  return (
    <OptimizedImage
      src={currentSrc}
      alt={alt}
      className={`transition-all duration-500 ${isLoaded ? 'filter-none' : 'filter blur-sm'} ${className}`}
      {...props}
    />
  );
};
