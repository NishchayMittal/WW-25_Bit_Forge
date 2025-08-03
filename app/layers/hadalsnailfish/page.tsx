import React from "react";
import "./style.css";

import GradientText from "../../components/GradientText";
import Navbar from "@/app/components/Navbar";
const hadalsnailfish = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="https://res.cloudinary.com/dgocm6tyt/video/upload/v1754175632/hadalsnailfish_zslfxj.mp4"
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
            <div className="Head">HADAL SNAILFISH</div>
          </GradientText>
          <p className="intro-text">
            The hadal snailfish is a deep-sea fish species adapted to live in
            the extreme pressures of the hadal zone, which is the deepest part
            of the ocean, found in oceanic trenches below 6,000 meters (about
            19,700 feet).
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
                  <strong>Phylum:</strong> Chordata
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Order:</strong> Scorpaeniformes
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Family:</strong> Liparidae (Snailfishes)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Habitat:</strong>: Hadal trenches, such as the Mariana
                  Trench, Kermadec Trench, and Japan Trench.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default hadalsnailfish;
