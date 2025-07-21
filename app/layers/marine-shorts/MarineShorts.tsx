"use client";

type ShortsPlayerProps = {
  videoId: string;
  title: string;
  channel: string;
};

export default function ShortsPlayer({
  videoId,
  title,
  channel,
}: ShortsPlayerProps) {
  return (
    <section className="h-screen w-full snap-start relative flex flex-col justify-center items-center bg-black">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&modestbranding=1&playlist=${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="absolute bottom-5 left-4 text-white text-left space-y-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-400">{channel}</p>
      </div>
    </section>
  );
}
