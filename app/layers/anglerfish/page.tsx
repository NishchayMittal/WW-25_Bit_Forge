import React from "react";
import "./style.css";
const anglerfish = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/anglerfish.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>ANGLER FISH</h1>
          </header>
          <p>
            The anglerfish is one of the most iconic and bizarre deep-sea
            creatures, famous for its glowing lure and terrifying appearance.
            It’s a remarkable example of adaptation to the dark, high-pressure
            world of the deep ocean.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Class : Actinopterygii (ray-finned fishes)</td>
            </tr>
            <tr>
              <td>Scientific Name : Lophiiformes</td>
            </tr>
            <tr>
              <td>Phylum : Chordata</td>
            </tr>
            <tr>
              <td>Family : Varies (e.g., Ceratiidae, Melanocetidae)</td>
            </tr>
            <tr>
              <td>Body : Large, fang-like teeth</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default anglerfish;
