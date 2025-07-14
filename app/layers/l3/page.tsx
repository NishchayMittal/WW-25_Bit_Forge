import React from "react";
import "./style.css";
import { Bebas_Neue } from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const layer3 = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/jellyfishes.mp4" loop autoPlay muted></video>
        <div className="video-copy">
          <h1 className={bebas.className}>BATHYPELAGIC</h1>
        </div>
      </div>
      <section>
        <h2>BATHYPELAGIC ZONE</h2>
        <br />
        <h3>The Midnight Zone - 1,000 to 4,000 meters</h3>
        <p>
          The bathypelagic zone, also known as the midnight zone, is a
          pitch-black, freezing, and high-pressure part of the ocean. Sunlight
          does not reach this depth, making it one of the most mysterious and
          extreme environments on Earth. Despite the harsh conditions, life
          thrives in forms that are specially adapted to complete darkness and
          crushing pressure.
        </p>
        <br />
        <h3>Key Features</h3>
        <ul>
          <li>Depth: 1,000 - 4,000 meters</li>
          <li>Light: Completely dark (no sunlight)</li>
          <li>Temperature: Near freezing (~4°C or 39°F)</li>
          <li>Pressure: Extremely high — hundreds of times surface pressure</li>
          <li>Oxygen: Limited but enough to support life</li>
        </ul>
        <br />
        <h3>Why It Matters</h3>
        <ul>
          <li>Part of Earth's largest ecosystem</li>
          <li>
            Plays a role in nutrient recycling and deep ocean carbon storage
          </li>
          <li>A frontier for scientific exploration and discovery</li>
        </ul>
        <br />
        <h3>Organisms Found</h3>
        <p>(select any to read about them)</p>
        <br />
        <div className="organisms">
          <a href="/layers/seacucumbers">
            <button>Sea Cucumbers</button>
          </a>
          <a href="/layers/anglerfish">
            <button>Anglerfish</button>
          </a>
          <a href="/layers/carnivoroussponges">
            <button>Carnivorous Sponges</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default layer3;
