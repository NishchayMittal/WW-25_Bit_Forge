import React from "react";
import "./style.css";
const giantsquid = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/giantsquid.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>GIANT SQUID</h1>
          </header>
          <p>
            The giant squid is one of the most mysterious and awe-inspiring
            deep-sea creatures on Earth. For centuries, it inspired tales of sea
            monsters like the kraken, but only in recent decades have scientists
            begun to understand it.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Phylum : Mollusca</td>
            </tr>
            <tr>
              <td>Order : Oegopsida</td>
            </tr>
            <tr>
              <td>Class : Cephalopoda (squids, octopuses, cuttlefish)</td>
            </tr>

            <tr>
              <td>Scientific Name : Architeuthis dux</td>
            </tr>
            <tr>
              <td>
                Length : Up to 12–13 meters (39–43 ft) for females, slightly
                less for males. Some unconfirmed reports suggest even larger.
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default giantsquid;
