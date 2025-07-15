import React from "react";
import "./style.css";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const layer4 = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/layer.mp4" loop autoPlay muted></video>
        <div className="video-copy">
          <h1 className={bebas.className}>ABYSSOPELAGIC</h1>
        </div>
      </div>
      
      <section>
        <h2>ABYSSOPELAGIC ZONE</h2>
        <br />
      <h3>The Abyss - 4,000 to 6,000 meters</h3>
      <p>The abyssopelagic zone, or simply the abyss, is one of the deepest and most extreme environments on Earth. It extends from 4,000 to 6,000 meters below the ocean surface and is shrouded in total darkness, near-freezing temperatures, and crushing pressure.Despite its harshness, this zone hosts strange and resilient life forms that have adapted to the abyssal world.</p>
      <br />
      <h3>Key Features</h3>
      <ul>
        <li>Depth: 4,000 - 6,000 meters</li>
        <li>Light: Absolute darkness</li>
        <li>Temperature: Near 2°C (35.6°F)</li>
        <li>Pressure: Over 600 times greater than at sea level</li>
        <li>Oxygen: Low but stable</li>
      </ul>
      <br />
      <h3>Why It Matters</h3>
      <ul>
        <li>Essential for the decomposition and recycling of oceanic organic material</li>
        <li>A part of Earth's largest unexplored habitat</li>
        <li>Critical in global nutrient cycling</li>
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
  );
};

export default layer4;
