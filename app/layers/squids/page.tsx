import React from "react";
import "./style.css";
const squids = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/squids.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>SQUIDS</h1>
          </header>
          <p>
            Squids are fascinating marine animals that belong to the class
            Cephalopoda, which also includes octopuses, cuttlefish, and
            nautiluses. Here are some quick facts about squids
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Phylum : Mollusca</td>
            </tr>
            <tr>
              <td>Class : Cephalopoda</td>
            </tr>
            <tr>
              <td>Order : Inside digestive tracts of marine animals</td>
            </tr>
            <tr>
              <td>Feeding method : Absorb nutrients from host's gut</td>
            </tr>
            <tr>
              <td>Body structure : Elongated with a soft mantle</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default squids;
