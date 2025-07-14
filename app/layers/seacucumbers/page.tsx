import React from "react";
import "./style.css";
const seacucumbers = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/seacucumber.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>SEA CUCUMBERS</h1>
          </header>
          <p>
            Sea cucumbers are fascinating marine animals that belong to the
            class Holothuroidea, within the phylum Echinodermata — the same
            group that includes sea stars and sea urchins. Despite their name
            and cucumber-like shape, they are animals, not plants or vegetables.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Phylum : Echinodermata</td>
            </tr>
            <tr>
              <td>Class : Holothuroidea</td>
            </tr>
            <tr>
              <td>Order : Apodida (no tube feet, burrowers)</td>
            </tr>
            <tr>
              <td>
                Habitat : They live on the seafloor, mostly in shallow waters
                but also at deep-sea depths.
              </td>
            </tr>
            <tr>
              <td>
                Body: Soft, elongated, and leathery. They usually have tube feet
                or tiny tentacles for movement and feeding
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default seacucumbers;
