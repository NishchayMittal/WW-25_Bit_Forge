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

const layer5 = () => {
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
            <h1 className={bebas.className}>HADALPELAGIC</h1>
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
            <div className="my-text">HADALPELAGIC ZONE</div>
          </GradientText>
          <h3 className="my-text">The Trenches - 6,000 to 11,000+ meters</h3>
          <p className={barlow.className}>
            The hadalpelagic zone, or hadal zone, is the deepest part of the
            ocean, found in oceanic trenches and deep sea troughs. Reaching
            depths over 11,000 meters, this zone is named after Hades, the Greek
            god of the underworld — a fitting name for such a dark, isolated,
            and extreme world.Despite the crushing pressure and eternal
            darkness, life does exist in this alien-like environment.
          </p>
          <br />
          <h3 className="my-text">Key Features</h3>
          <ul>
            <li className={barlow.className}>Depth: 6,000 to 11,000+ meters</li>
            <li className={barlow.className}>Light: Total darkness</li>
            <li className={barlow.className}>
              Temperature: Just above freezing (~1 - 2°C)
            </li>
            <li className={barlow.className}>
              Pressure: Over 1,000 times atmospheric pressure
            </li>
            <li className={barlow.className}>
              Environment: Found only in trenches, like the Mariana Trench
            </li>
          </ul>
          <br />
          <h3 className="my-text">Why It Matters</h3>
          <ul>
            <li className={barlow.className}>
              One of Earth's least explored ecosystems
            </li>
            <li className={barlow.className}>
              Offers clues about life in extreme conditions
            </li>
            <li className={barlow.className}>
              Vital for understanding carbon cycling and deep-sea biodiversity
            </li>
          </ul>
          <br />
          <h3 className={barlow.className}>Organisms Found</h3>
          <p className={barlow.className}>(select any to read about them)</p>
          <br />
          <div className="organisms">
            <a href="/layers/seacucumbers">
              <button>Sea Cucumbers</button>
            </a>
            <br />
            <a href="/layers/hadalsnailfish">
              <button>Hadal Snailfish</button>
            </a>
            <br />
            <a href="/layers/amphipods">
              <button>Amphipods</button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default layer5;
