import React from "react";
import "./style.css";

import GradientText from "../../components/GradientText";
import Navbar from "@/app/components/Navbar";
const amphipods = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="/videos/amphipods.mp4"
          loop
          autoPlay
          muted
        ></video>
        <div className="overlay" />
        <section className="glass-panel">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            <div className="Head">AMPHIPODS</div>
          </GradientText>
          <p className="intro-text">
            Amphipods are small, shrimp-like crustaceans found in nearly every
            aquatic environment — from shallow freshwater streams to the deepest
            parts of the ocean.
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Class:</strong> Malacostraca
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Phylum:</strong> Arthropoda
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Order:</strong> Amphipoda
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Family:</strong> Liparidae (Snailfishes)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Body:</strong>: Laterally compressed (flattened from
                  side to side), unlike shrimp which are dorsoventrally
                  compressed.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default amphipods;
