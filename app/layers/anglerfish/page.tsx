import React from "react";
import "./style.css";

import GradientText from "../../components/GradientText";
import Navbar from "@/app/components/Navbar";
const anglerfish = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="/videos/anglerfish.mp4"
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
            <div className="Head">ANGLER FISH</div>
          </GradientText>
          <p className="intro-text">
            The anglerfish is one of the most iconic and bizarre deep-sea
            creatures, famous for its glowing lure and terrifying appearance.
            It’s a remarkable example of adaptation to the dark, high-pressure
            world of the deep ocean.
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Class:</strong> Actinopterygii (ray-finned fishes)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Phylum:</strong> Echinodermata
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Scientific Name:</strong> Chordata
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Order:</strong> Apodida (no tube feet, burrowers)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Family:</strong> Varies (e.g., Ceratiidae,
                  Melanocetidae)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Body:</strong> Large, fang-like teeth
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default anglerfish;
