import React from "react";
import "./style.css";
const amphipods = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/amphipods.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>AMPHIPODS</h1>
          </header>
          <p>
            Amphipods are small, shrimp-like crustaceans found in nearly every
            aquatic environment — from shallow freshwater streams to the deepest
            parts of the ocean.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Class : Malacostraca</td>
            </tr>
            <tr>
              <td>Scientific Order : Amphipoda</td>
            </tr>
            <tr>
              <td>Phylum : Arthropoda</td>
            </tr>
            <tr>
              <td>Subphylum: Crustacea</td>
            </tr>
            <tr>
              <td>
                Body Shape : Laterally compressed (flattened from side to side),
                unlike shrimp which are dorsoventrally compressed.
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default amphipods;
