import React from "react";
import "./style.css";
import Navbar from "@/app/components/Navbar";
import GradientText from "../../components/GradientText";

const jellyfishes = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="/videos/jellyfishes.mp4"
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
            <div className="Head">JELLYFISHES</div>
          </GradientText>
          <p className="intro-text">
            Jellyfish are ancient, gelatinous marine animals known for their
            umbrella-like shape and stinging tentacles. They are invertebrates
            belonging to the phylum Cnidaria and have been drifting through
            Earth’s oceans for over 500 million years—longer than dinosaurs!
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Phylum:</strong> Cnidaria
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Class:</strong> Mostly Scyphozoa (true jellyfish),
                  also Cubozoa (box jellies), Hydrozoa, etc.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Order:</strong> Decapoda
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Habitat:</strong> All ocean zones, mostly epipelagic,
                  but some deep-sea
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Body structure:</strong> Soft, gelatinous, bell-shaped
                  with trailing tentacles
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default jellyfishes;
