import React from "react";
import "./style.css";
const dolphins = () => {
  return (
    <div>
      <div className="video-section">
        <video
          src="/videos/dolphins.mp4"
          loop
          autoPlay
          muted
          id="bg-video"
        ></video>
        <section className="video-copy">
          <header>
            <h1>DOLPHINS</h1>
          </header>
          <p>
            Dolphins are highly intelligent, social marine mammals known for
            their playful behavior, complex communication, and streamlined
            bodies. They belong to the order Cetacea, which also includes whales
            and porpoises.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Class : Mammalia</td>
            </tr>
            <tr>
              <td>Order : Cetacea</td>
            </tr>
            <tr>
              <td>Family : Delphinidae (oceanic dolphins)</td>
            </tr>

            <tr>
              <td>
                {" "}
                Habitat : Mostly epipelagic zone (0 - 200 m), coastal and open
                ocean
              </td>
            </tr>
            <tr>
              <td>Lifespan : 20 - 60+ years (varies by species)</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default dolphins;
