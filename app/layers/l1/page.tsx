import React from "react";
import "./style.css";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const layer1 = () => {
  return (
    <div>
      <div className="video-section">
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
      {/* <section>
        <video autoPlay loop muted playsInline>
          <source src="/layer1.mp4" type="video/mp4" />
        </video>
      </section> */}
      {/* <section>
        <img src="layer.webp" alt="" />
        <h2>hii</h2>
      </section> */}
      <section className="parallax">
        <h2>EPIPELAGIC ZONE</h2>
        <br />
        <h3>The Sunlight Zone - 0 to 200 meters</h3>
        <p>
          The epipelagic zone, also known as the sunlight zone, is the uppermost
          layer of the ocean. Extending from the surface to a depth of around
          200 meters, this zone receives ample sunlight, making it the most
          biologically active layer in the ocean.
        </p>
        <br />
        <h3>Key Features</h3>
        <ul>
          <li>Depth: 0 - 200 meters</li>
          <li>Light: Abundant sunlight</li>
          <li>Temperature: Warmest among ocean layers</li>
          <li>Pressure: Relatively low compared to deeper zones</li>
          <li>Oxygen: High — supports rich marine life</li>
        </ul>
        <br />
        <h3>Why It Matters</h3>
        <ul>
          <li>
            Photosynthesis occurs here due to sunlight, producing over 50% of
            Earth's oxygen.
          </li>
          <li>It's the starting point of the marine food chain.</li>
          <li>It supports fisheries and coastal ecosystems.</li>
        </ul>
        <br />
        <h3>Organisms Found</h3>
        <p>(select any to read about them)</p>

        <div className="organisms">
          <a href="/layers/tuna">
            <button>Tuna</button>
          </a>
          <br />

          <a href="/layers/dolphins">
            <button>Dolphins</button>
          </a>
          <br />

          <a href="/layers/jellyfishes">
            <button>Jellyfishes</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default layer1;
