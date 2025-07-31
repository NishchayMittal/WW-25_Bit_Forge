import React from "react";
import "./style.css";
import Navbar from "@/app/components/Navbar";
import GradientText from "../../components/GradientText";

const squids = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="/videos/squids.mp4"
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
            <div className="Head">SQUIDS</div>
          </GradientText>
          <p className="intro-text">
            Squids are fascinating marine animals that belong to the class
            Cephalopoda, which also includes octopuses, cuttlefish, and
            nautiluses. Here are some quick facts about squids.
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Phylum:</strong> Mollusca
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Class:</strong> Cephalopoda
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Order:</strong> Inside digestive tracts of marine
                  animals
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Feeding method:</strong> Absorb nutrients from host's
                  gut
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Body structure:</strong> Elongated with a soft mantle
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default squids;
