import React from "react";
import "./style.css";
const jellyfishes = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/shrimps.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>SHRIMPS</h1>
          </header>
          <p>
            Shrimp (or shrimps, though "shrimp" is the more common plural in
            English) are small, aquatic crustaceans that are found in both
            saltwater and freshwater environments. They play a crucial role in
            marine ecosystems and global cuisine.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Phylum : Arthropoda</td>
            </tr>
            <tr>
              <td>Class : Malacostraca</td>
            </tr>
            <tr>
              <td>Order : Decapoda</td>
            </tr>
            <tr>
              <td>
                Size : Typically 1 - 3 inches long, but can be larger depending
                on species
              </td>
            </tr>
            <tr>
              <td>Body : Segmented with a hard exoskeleton</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default jellyfishes;
