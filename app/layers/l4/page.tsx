// app/layers/layer1.tsx
"use client";
import GradientText from "../../components/GradientText";
import { Barlow } from "next/font/google";
import React from "react";
import "./style.css";
import { Bebas_Neue } from "next/font/google";
import Navbar from "@/app/components/Navbar";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const barlow = Barlow({ subsets: ["latin"], weight: ["400"] });

const layer4 = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Background Video Section */}
        <div className="video-section">
          <video
            src="https://res.cloudinary.com/dgocm6tyt/video/upload/v1754175665/layer_ps4vdr.mp4"
            loop
            autoPlay
            muted
            id="bg-video"
          ></video>
          <div className="video-copy">
            <h1 className={bebas.className}>ABYSSOPELAGIC</h1>
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
            <div className="my-text">ABYSSOPELAGIC ZONE</div>
          </GradientText>
          <h3 className="my-text">The Abyss - 4,000 to 6,000 meters</h3>
          <p className={barlow.className}>
            The abyssopelagic zone, or simply the abyss, is one of the deepest
            and most extreme environments on Earth. It extends from 4,000 to
            6,000 meters below the ocean surface and is shrouded in total
            darkness, near-freezing temperatures, and crushing pressure.Despite
            its harshness, this zone hosts strange and resilient life forms that
            have adapted to the abyssal world.
          </p>
          <br />
          <h3 className="my-text">Key Features</h3>
          <ul>
            <li className={barlow.className}>Depth: 4,000 - 6,000 meters</li>
            <li className={barlow.className}>Light: Absolute darkness</li>
            <li className={barlow.className}>Temperature: Near 2°C (35.6°F)</li>
            <li className={barlow.className}>
              Pressure: Over 600 times greater than at sea level
            </li>
            <li className={barlow.className}>Oxygen: Low but stable</li>
          </ul>
          <br />
          <h3 className="my-text">Why It Matters</h3>
          <ul>
            <li className={barlow.className}>
              Essential for the decomposition and recycling of oceanic organic
              material
            </li>
            <li className={barlow.className}>
              A part of Earth's largest unexplored habitat
            </li>
            <li className={barlow.className}>
              Critical in global nutrient cycling
            </li>
          </ul>
          <br />
          <h3 className="my-text">Organisms Found</h3>
          <p className={barlow.className}>(select any to read about them)</p>
          <br />
          <div className="organisms">
            <a href="/layers/seacucumbers">
              <button>Sea Cucumbers</button>
            </a>
            <br />
            <a href="/layers/tapeworms">
              <button>Tapeworms</button>
            </a>
            <br />
            <a href="/layers/giantsquid">
              <button>Giant Squid</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default layer4;
