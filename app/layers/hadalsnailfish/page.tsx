import React from "react";
import "./style.css";
const hadalsnailfish = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/hadalsnailfish.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>HADAL SNAILFISH</h1>
          </header>
          <p>
            The hadal snailfish is a deep-sea fish species adapted to live in
            the extreme pressures of the hadal zone, which is the deepest part
            of the ocean, found in oceanic trenches below 6,000 meters (about
            19,700 feet).
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Phylum : Chordata</td>
            </tr>
            <tr>
              <td>Order : Scorpaeniformes</td>
            </tr>
            <tr>
              <td>Class : Actinopterygii (ray-finned fishes)</td>
            </tr>
            <tr>
              <td>Family : Liparidae (Snailfishes)</td>
            </tr>
            <tr>
              <td>
                Scientific Name : Pseudoliparis swirei, Notoliparis
                kermadecensis, etc.
              </td>
            </tr>
            <tr>
              <td>
                Habitat: Hadal trenches, such as the Mariana Trench, Kermadec
                Trench, and Japan Trench.
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default hadalsnailfish;
