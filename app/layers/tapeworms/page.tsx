import React from "react";
import "./style.css";
import Navbar from "@/app/components/Navbar";
import GradientText from "../../components/GradientText";

const Tapeworms = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="/videos/tapeworms.mp4"
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
            <div className="Head">TAPEWORMS</div>
          </GradientText>
          <p className="intro-text">
            Oceanic tapeworms are parasitic flatworms that live in marine
            environments, often inside the intestines of fish, sharks, marine
            mammals, or other sea creatures. Like all tapeworms, they absorb
            nutrients from their hosts and have no digestive system of their
            own.
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Phylum:</strong> Platyhelminthes (flatworms)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Class:</strong> Cestoda
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Order:</strong> Teuthida (true squids)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Arms & Tentacles:</strong> 8 arms + 2 longer tentacles
                  for catching prey
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Body structure:</strong> Long, flat, ribbon-like;
                  segmented (proglottids)
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Tapeworms;
