"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import SplitText from "./SplitText";
import ShinyText from "./ShinyText";
import DarkVeil from "./DarkVeil";
import BlurText from "./BlurText";
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });

export default function Homepage() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

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
      if (!res.ok) throw new Error("Error fetching data");

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
    const videoFile = data.videos?.[0]?.video_files?.find(
      (file: any) => file.file_type === "video/mp4"
    );
    return videoFile?.link || "";
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
    <div className="page">
      <div style={{ width: "100%", height: "1000px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        >
          <DarkVeil />
        </div>
        <div>
          <h1>Marine Animal Explorer!</h1>
          <h5>
            <ShinyText
              text="A premium site to get all your marine related doubts solved..."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </h5>
          <div className="search">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for an animal"
            />
            <button onClick={getdata}>
              <ShinyText text="Search" disabled={false} speed={3} />
            </button>
          </div>

          <div className="info">
            <p>
              <strong>Name :</strong>
              <br />
              <SplitText text={commonName} {...splitConfig} />
            </p>
            <br />
            <p>
              <strong>Scientific Name :</strong>
              <br />
              <SplitText text={scientificName} {...splitConfig} />
            </p>
            <br />
            <p>
              <strong>ID :</strong>
              <br />
              <SplitText text={id} {...splitConfig} />
            </p>
            <br />
            <p>
              <strong>Rank :</strong>
              <br />
              <SplitText text={rank} {...splitConfig} />
            </p>
            <br />
            <p>
              <strong>Interesting Fact:</strong>
              <SplitText text={fact} {...splitConfig} duration={0.01} />
            </p>
          </div>

          {videoUrl && (
            <video key={videoUrl} controls width="640" height="360">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {/* ✅ Query passed to map */}
          <MapComponent searchTerm={query} />
        </div>
      </div>
    </div>
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
