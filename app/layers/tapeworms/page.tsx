import React from "react";
import "./style.css";
const tapeworms = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/tapeworms.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>TAPEWORMS</h1>
          </header>
          <p>
            ceanic tapeworms are parasitic flatworms that live in marine
            environments, often inside the intestines of fish, sharks, marine
            mammals, or other sea creatures. Like all tapeworms, they absorb
            nutrients from their hosts and have no digestive system of their
            own.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Phylum : Platyhelminthes (flatworms)</td>
            </tr>
            <tr>
              <td>Class : Cestoda</td>
            </tr>
            <tr>
              <td>Order : Teuthida (true squids)</td>
            </tr>
            <tr>
              <td>
                Arms & Tentacles: 8 arms + 2 longer tentacles for catching prey
              </td>
            </tr>
            <tr>
              <td>
                Body structure : Long, flat, ribbon-like; segmented
                (proglottids)
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default tapeworms;
