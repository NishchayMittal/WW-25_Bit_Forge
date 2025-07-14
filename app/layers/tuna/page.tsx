import React from "react";
import "./style.css";
const tuna = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/tuna.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>TUNA</h1>
          </header>
          <p>
            Tuna are large, fast-swimming predatory fish known for their
            strength, migratory behavior, and high commercial value. They belong
            to the family Scombridae, mainly in the genus Thunnus.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Scientific family : Scombridae</td>
            </tr>
            <tr>
              <td>Habitat : Open ocean (epipelagic zone)</td>
            </tr>
            <tr>
              <td>Depth range : Surface to ~500 m (mainly 0 - 200 m)</td>
            </tr>
            <tr>
              <td>Diet : Fish, squid, crustaceans</td>
            </tr>
            <tr>
              <td>Lifespan : 5 - 30 years (varies by species)</td>
            </tr>
            <tr>
              <td>Adaptation : Warm-blooded (rare for fish), fast swimmers</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default tuna;
