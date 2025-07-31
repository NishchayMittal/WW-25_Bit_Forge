// app/layers/layer1.tsx
"use client";
import GradientText from "../../components/GradientText";

import React from "react";
import "./style.css";
import { Bebas_Neue } from "next/font/google";
import Navbar from "@/app/components/Navbar";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const layer2 = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Background Video Section */}
        <div className="video-section">
          <video
            src="/videos/layer.mp4"
            loop
            autoPlay
            muted
            id="bg-video"
          ></video>
          <div className="video-copy">
            <h1 className={bebas.className}>MESOPELAGIC</h1>
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
            <div className="Head">MESOPELAGIC ZONE</div>
          </GradientText>
          <h3>The Twilight Zone - 200 to 1,000 meters</h3>
          <p>
            The mesopelagic zone, also called the twilight zone, lies just below
            the epipelagic zone. Sunlight barely reaches this layer, making it a
            dim and mysterious world. Though it lacks enough light for
            photosynthesis, it's home to a variety of adapted and bioluminescent
            organisms.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>Depth: 200 - 1,000 meters</li>
            <li>Light: Very limited (no photosynthesis)</li>
            <li>Temperature: Cooler, drops rapidly with depth</li>
            <li>Pressure: Increases significantly compared to surface</li>
            <li>Oxygen: Begins to decline</li>
          </ul>

          <h3>Why It Matters</h3>
          <ul>
            <li>
              Transfers energy between surface and deep ocean through vertical
              migration
            </li>
            <li>
              Helps in the global carbon cycle by moving carbon from surface to
              deep waters
            </li>
            <li>Bioluminescence for communication, camouflage, and hunting</li>
          </ul>

          <h3>Organisms Found</h3>
          <p>(Select any to read more)</p>
          <div className="organisms">
            <a href="/layers/shrimps">
              <button>Shrimps</button>
            </a>
            <br />
            <a href="/layers/squids">
              <button>Squids</button>
            </a>
            <br />
            <a href="/layers/jellyfishes">
              <button>Jellyfishes</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default layer2;
