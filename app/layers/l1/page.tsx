// app/layers/layer1.tsx
"use client";
import GradientText from "../../components/GradientText";

import React from "react";
import "./style.css";
import { Bebas_Neue } from "next/font/google";
import Navbar from "@/app/components/Navbar";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const Layer1 = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="video-section">
          <Navbar />
          <video
            src="/videos/layer.mp4"
            loop
            autoPlay
            muted
            id="bg-video"
          ></video>
          <div className="video-copy">
            <h1 className={bebas.className}>EPIPELAGIC</h1>
          </div>
        </div>

        {/* Main Content Section */}
        <section>
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            <div className="Head">EPIPELAGIC ZONE</div>
          </GradientText>
          <h3>The Sunlight Zone - 0 to 200 meters</h3>
          <p>
            The epipelagic zone, also known as the sunlight zone, is the
            uppermost layer of the ocean. Extending from the surface to a depth
            of around 200 meters, this zone receives ample sunlight, making it
            the most biologically active layer in the ocean.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>Depth: 0 - 200 meters</li>
            <li>Light: Abundant sunlight</li>
            <li>Temperature: Warmest among ocean layers</li>
            <li>Pressure: Relatively low compared to deeper zones</li>
            <li>Oxygen: High — supports rich marine life</li>
          </ul>

          <h3>Why It Matters</h3>
          <ul>
            <li>
              Photosynthesis occurs here due to sunlight, producing over 50% of
              Earth's oxygen.
            </li>
            <li>It's the starting point of the marine food chain.</li>
            <li>It supports fisheries and coastal ecosystems.</li>
          </ul>

          <h3>Organisms Found</h3>
          <p>(Select any to read more)</p>
          <div className="organisms">
            <a href="/layers/tuna">
              <button>Tuna</button>
            </a>
            <a href="/layers/dolphins">
              <button>Dolphins</button>
            </a>
            <a href="/layers/jellyfishes">
              <button>Jellyfishes</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Layer1;
