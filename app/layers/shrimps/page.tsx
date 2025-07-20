import React from "react";
import "./style.css";

import GradientText from "../../components/GradientText";

const jellyfishes = () => {
  return (
    <div className="page-container">
      <video className="background-video" src="/videos/shrimps.mp4" loop autoPlay muted></video>
      <div className="overlay" />
      <section className="glass-panel">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        ><div className="Head">SHRIMPS</div></GradientText>
        <p className="intro-text">
            Shrimp (or shrimps, though "shrimp" is the more common plural in
            English) are small, aquatic crustaceans that are found in both
            saltwater and freshwater environments. They play a crucial role in
            marine ecosystems and global cuisine.
        </p>

        <h3>Overview</h3>
        <table className="info-table">
          <tbody>
            <tr><td><strong>Phylum:</strong> Arthropoda</td></tr>
            <tr><td><strong>Class:</strong> Malacostraca</td></tr>
            <tr><td><strong>Order:</strong> Decapoda</td></tr>
            <tr><td><strong>Size:</strong> Typically 1 - 3 inches long, but can be larger depending
                on species</td></tr>
            <tr><td><strong>Body structure:</strong> Segmented with a hard exoskeleton</td></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default jellyfishes;
