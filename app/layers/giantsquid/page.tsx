import React from "react";
import "./style.css";

import GradientText from "../../components/GradientText";
import Navbar from "@/app/components/Navbar";
const giantsquid = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="https://res.cloudinary.com/dgocm6tyt/video/upload/v1754175638/giantsquid_hgqli6.mp4"
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
            <div className="Head">GIANT SQUID</div>
          </GradientText>
          <p className="intro-text">
            The giant squid is one of the most mysterious and awe-inspiring
            deep-sea creatures on Earth. For centuries, it inspired tales of sea
            monsters like the kraken, but only in recent decades have scientists
            begun to understand it.
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Class:</strong> Cephalopoda (squids, octopuses,
                  cuttlefish)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Phylum:</strong> Mollusca
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Order:</strong> Oegopsida
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Scientific Name:</strong> Architeuthis dux
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Length:</strong>: Up to 12–13 meters (39–43 ft) for
                  females, slightly less for males. Some unconfirmed reports
                  suggest even larger.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default giantsquid;
