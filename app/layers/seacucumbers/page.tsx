import React from "react";
import "./style.css";

import GradientText from "../../components/GradientText";

const seacucumbers = () => {
  return (
    <div className="page-container">
      <video className="background-video" src="/videos/seacucumber_alt.mp4" loop autoPlay muted></video>
      <div className="overlay" />
      <section className="glass-panel">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        ><div className="Head">SEA CUCUMBERS</div></GradientText>
        <p className="intro-text">
            Sea cucumbers are fascinating marine animals that belong to the
            class Holothuroidea, within the phylum Echinodermata — the same
            group that includes sea stars and sea urchins. Despite their name
            and cucumber-like shape, they are animals, not plants or vegetables.
        </p>

        <h3>Overview</h3>
        <table className="info-table">
          <tbody>
            <tr><td><strong>Lifespan:</strong> 20 - 60+ years (varies by species)</td></tr>
            <tr><td><strong>Phylum:</strong> Echinodermata</td></tr>
<tr><td><strong>Class:</strong> Holothuroidea</td></tr>
            <tr><td><strong>Order:</strong> Apodida (no tube feet, burrowers)</td></tr>
            <tr><td><strong>Family:</strong> Soft, elongated, and leathery. They usually have tube feet
                or tiny tentacles for movement and feeding</td></tr>
            <tr><td><strong>Body:</strong> They live on the seafloor, mostly in shallow waters but also at deep-sea depths.</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default seacucumbers;
