import React from "react";
import "./style.css";
const jellyfishes = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/jellyfishes.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>JELLYFISHES</h1>
          </header>
          <p>
            Jellyfish are ancient, gelatinous marine animals known for their
            umbrella-like shape and stinging tentacles. They are invertebrates
            belonging to the phylum Cnidaria and have been drifting through
            Earth’s oceans for over 500 million years—longer than dinosaurs!
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Phylum : Cnidaria</td>
            </tr>
            <tr>
              <td>
                Class : Mostly Scyphozoa (true jellyfish), also Cubozoa (box
                jellies), Hydrozoa, etc.
              </td>
            </tr>
            <tr>
              <td>
                Body Type : Soft, gelatinous, bell-shaped with trailing
                tentacles
              </td>
            </tr>
            <tr>
              <td>
                Habitat : All ocean zones, mostly epipelagic, but some deep-sea
              </td>
            </tr>
            <tr>
              <td>
                Lifespan : A few hours to several months (some can live for
                years)
              </td>
            </tr>
            <tr>
              <td>Diet : Small fish, plankton, eggs, larvae</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default jellyfishes;
