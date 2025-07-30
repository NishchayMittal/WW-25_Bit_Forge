import { useEffect, useRef, useState } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useLazyLoad = (options: UseLazyLoadOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const targetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = targetRef.current;
    if (!element || (triggerOnce && hasTriggered)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            setHasTriggered(true);
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return { targetRef, isIntersecting };
};

// Hook for preloading media when it's about to enter viewport
export const useMediaPreload = (src: string, type: 'image' | 'video' = 'image') => {
  const [isPreloaded, setIsPreloaded] = useState(false);
  const { targetRef, isIntersecting } = useLazyLoad({ 
    rootMargin: '200px', // Start loading 200px before entering viewport
    triggerOnce: true 
  });

  useEffect(() => {
    if (isIntersecting && !isPreloaded) {
      if (type === 'image') {
        const img = new Image();
        img.onload = () => setIsPreloaded(true);
        img.src = src;
      } else if (type === 'video') {
        const video = document.createElement('video');
        video.oncanplay = () => setIsPreloaded(true);
        video.preload = 'metadata';
        video.src = src;
      }
    }
  }, [isIntersecting, src, type, isPreloaded]);

  return { targetRef, isPreloaded, isIntersecting };
};

// Hook for connection-aware loading
export const useConnectionAwareLoading = () => {
  const [connectionType, setConnectionType] = useState<string>('unknown');
  const [shouldLoadHQ, setShouldLoadHQ] = useState(true);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection as { effectiveType: string; addEventListener: (event: string, handler: () => void) => void; removeEventListener: (event: string, handler: () => void) => void; };
      setConnectionType(connection.effectiveType || 'unknown');
      
      // Only load high quality on fast connections
      setShouldLoadHQ(['4g', 'wifi'].includes(connection.effectiveType));
      
      const handleConnectionChange = () => {
        setConnectionType(connection.effectiveType || 'unknown');
        setShouldLoadHQ(['4g', 'wifi'].includes(connection.effectiveType));
      };
      
      connection.addEventListener('change', handleConnectionChange);
      
      return () => {
        connection.removeEventListener('change', handleConnectionChange);
      };
    }
  }, []);

  return { connectionType, shouldLoadHQ };
};

export default useLazyLoad;
