'use client';

import { useEffect, useRef, useState } from 'react';
import ShortsPlayer from '@/components/MarineShorts';

type Video = {
  id: { videoId: string };
  snippet: {
    title: string;
    channelTitle: string;
  };
};

export default function ShortsPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const fetchVideos = async (token = '') => {
    setLoading(true);

    const url = new URL('https://www.googleapis.com/youtube/v3/search');
    url.searchParams.set('part', 'snippet');
    url.searchParams.set('q', 'marine life #shorts');
    url.searchParams.set('type', 'video');
    url.searchParams.set('videoDuration', 'short');
    url.searchParams.set('maxResults', '10');
    url.searchParams.set('key', process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!);
    if (token) url.searchParams.set('pageToken', token);

    const res = await fetch(url.toString());
    const data = await res.json();

    setVideos((prev) => [...prev, ...(data.items || [])]);
    setNextPageToken(data.nextPageToken || null);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && nextPageToken && !loading) {
          fetchVideos(nextPageToken);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [nextPageToken, loading]);

  return (
    <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar bg-black">
      {videos.map((video, i) => (
        <div key={`${video.id.videoId}-${i}`} ref={i === videos.length - 1 ? observerRef : null}>
          <ShortsPlayer
            videoId={video.id.videoId}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
          />
        </div>
      ))}

      {loading && (
        <div className="text-center text-white py-4">
          Loading more shorts...
        </div>
      )}
    </main>
  );
}