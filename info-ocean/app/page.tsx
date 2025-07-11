"use client";
// this line allows next js to use hooks like usestate,useeffect
import { useState } from "react";
export default function homepage() {
  const [query, setQuery] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [id, setId] = useState("");
  const [rank, setRank] = useState("");
  const [fact, setFact] = useState("");
  const getdata = async () => {
    try {
      const res = await fetch(
        `https://api.inaturalist.org/v1/search?q=${query}&sources=taxa`
      );
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      const result = data.results[0]?.record;
      if (!result) throw new Error("No result found");

      setCommonName(result.preferred_common_name || "N/A");
      setScientificName(result.name || "N/A");
      setId(result.id || "N/A");
      setRank(result.rank || "N/A");

      const video = await getVideo(result.name);
      setVideoUrl(video);

      const wikiFact = await getWikipediaFact(result.name);
      setFact(wikiFact);
    } catch (err) {
      console.error("Fetch error:", err);
      setFact("Error fetching data.");
    }
  };
  const getVideo = async (query: string): Promise<string> => {
    const res = await fetch(
      `https://api.pexels.com/videos/search?query=${query}&per_page=1`,
      {
        headers: {
          Authorization:
            "fED3W6AyiIHZViPUGaG9RMe3Q965siRa0Iqy2OoNqCA12Zh38QfjyejZ", // your API key
        },
      }
    );
    const data = await res.json();
    return data.videos?.[0]?.video_files?.[0]?.link || "";
  };
  const getWikipediaFact = async (title: string): Promise<string> => {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      title
    )}`;
    try {
      const res = await fetch(url);
      if (!res.ok) return "No fact available.";
      const data = await res.json();
      return data.extract || "No interesting fact found.";
    } catch {
      return "Error fetching fact.";
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Marine Animal Explorer</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for an animal"
        className="border p-2 rounded mr-2"
      />
      <button
        onClick={getdata}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      <div className="mt-6 space-y-2">
        <p>
          <strong>Name:</strong> {commonName}
        </p>
        <p>
          <strong>Scientific Name:</strong> {scientificName}
        </p>
        <p>
          <strong>ID:</strong> {id}
        </p>
        <p>
          <strong>Rank:</strong> {rank}
        </p>
        <p>
          <strong>Interesting Fact:</strong> {fact}
        </p>
      </div>

      {videoUrl && (
        <video key={videoUrl} controls className="mt-6 w-full max-w-xl">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
