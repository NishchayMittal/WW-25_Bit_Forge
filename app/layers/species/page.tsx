"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";
import TextPressure from "./TextPressure";
import "./style.css";
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });
import Navbar from "@/app/components/Navbar";

export default function Homepage() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [id, setId] = useState("");
  const [rank, setRank] = useState("");
  const [fact, setFact] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Debounce user input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, 800);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) getData(debouncedQuery);
  }, [debouncedQuery]);

  const getData = async (q: string) => {
    setLoading(true);
    setError("");
    setCommonName("");
    setScientificName("");
    setId("");
    setRank("");
    setFact("");
    setVideoUrl("");

    try {
      const res = await fetch(
        `https://api.inaturalist.org/v1/search?q=${q}&sources=taxa`
      );
      if (!res.ok) throw new Error("Error fetching search data");

      const data = await res.json();
      const result = data.results?.[0]?.record;
      if (!result) throw new Error("No result found");

      const name = result.name;

      setCommonName(result.preferred_common_name || "N/A");
      setScientificName(name || "N/A");
      setId(result.id || "N/A");
      setRank(result.rank || "N/A");

      const [video, wiki] = await Promise.all([
        getVideo(name),
        getWikipediaFact(name),
      ]);
      setVideoUrl(video);
      setFact(wiki);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Search failed.");
    } finally {
      setLoading(false);
    }
  };

  const getVideo = async (query: string): Promise<string> => {
    const res = await fetch(
      `https://api.pexels.com/videos/search?query=${query}&per_page=1`,
      {
        headers: {
          Authorization:
            "fED3W6AyiIHZViPUGaG9RMe3Q965siRa0Iqy2OoNqCA12Zh38QfjyejZ",
        },
      }
    );
    const data = await res.json();
    const videoFile = data.videos?.[0]?.video_files?.find(
      (file: any) => file.file_type === "video/mp4"
    );
    return videoFile?.link || "";
  };

  const getWikipediaFact = async (title: string): Promise<string> => {
    try {
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          title
        )}`
      );
      if (!res.ok) return "No fact available.";
      const data = await res.json();
      return data.extract || "No interesting fact found.";
    } catch {
      return "Error fetching fact.";
    }
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <div className="w-full h-[1000px] relative px-4">
          <h5></h5>

                    <div className="search flex gap-4 items-center mt-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for an animal"
              className="p-2 rounded border w-full max-w-md"
            />
            {loading ? (
              <span className="text-blue-600">Loading...</span>
            ) : (
              <button
                onClick={() => getData(query)}
                className="search-button-ocean"
                disabled={!query.trim()}
              >
                <ShinyText text="Search" disabled={false} speed={3} />
                <div className="ocean-waves"></div>
              </button>
            )}
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          <div className="info mt-6">
            {commonName && (
              <p>
                <SplitText text={commonName} {...splitConfig} />
              </p>
            )}
            {scientificName && (
              <p>
                <strong>Scientific Name:</strong>
                <br />
                {scientificName}
              </p>
            )}
            {id && (
              <p>
                <strong>ID:</strong>
                <br />
                {id}
              </p>
            )}
            {rank && (
              <p>
                <strong>Rank:</strong>
                <br />
                {rank}
              </p>
            )}
            {fact && (
              <p>
                <strong>Interesting Fact:</strong>
                <br />
                {fact}
              </p>
            )}
          </div>

          <div className="map mt-8">
            <div className="map-controls">
              <select className="map-dropdown">
                <option value="">Select observation type</option>
                <option value="mammals">Mammals</option>
                <option value="birds">Birds</option>
                <option value="reptiles">Reptiles</option>
                <option value="fish">Fish</option>
                <option value="invertebrates">Invertebrates</option>
                <option value="plants">Plants</option>
              </select>
            </div>
            <MapComponent searchTerm={debouncedQuery} />
          </div>
        </div>
      </div>
    </>
  );
}

const splitConfig = {
  className: "text-5xl font-bold text-center",
  delay: 100,
  duration: 0.6,
  ease: "power3.out",
  splitType: "chars",
  from: { opacity: 0, y: 40 },
  to: { opacity: 1, y: 0 },
  threshold: 0.1,
  rootMargin: "-100px",
  textAlign: "center",
  onLetterAnimationComplete: () => {},
};