import React from "react";
import "./style.css";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const layer5 = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/layer.mp4" loop autoPlay muted></video>
        <div className="video-copy">
          <h1 className={ bebas.className }>HADALPELAGIC</h1>
        </div>
      </div>
      <section>
        <h2>HADALPELAGIC ZONE</h2>
        <br />
      <h3>The Trenches - 6,000 to 11,000+ meters</h3>
      <p>The hadalpelagic zone, or hadal zone, is the deepest part of the ocean, found in oceanic trenches and deep sea troughs. Reaching depths over 11,000 meters, this zone is named after Hades, the Greek god of the underworld — a fitting name for such a dark, isolated, and extreme world.Despite the crushing pressure and eternal darkness, life does exist in this alien-like environment.</p>
      <br />
      <h3>Key Features</h3>
      <ul>
        <li>Depth: 6,000 to 11,000+ meters</li>
        <li>Light: Total darkness</li>
        <li>Temperature: Just above freezing (~1 - 2°C)</li>
        <li>Pressure: Over 1,000 times atmospheric pressure</li>
        <li>Environment: Found only in trenches, like the Mariana Trench</li>
      </ul>
      <br />
      <h3>Why It Matters</h3>
      <ul>
        <li>One of Earth's least explored ecosystems</li>
        <li>Offers clues about life in extreme conditions</li>
        <li>Vital for understanding carbon cycling and deep-sea biodiversity</li>
      </ul>
      <br />
        <h3>Organisms Found</h3>
        <p>(select any to read about them)</p>
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
  );
};

export default layer5;
