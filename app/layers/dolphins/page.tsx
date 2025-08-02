import React from "react";
import "./style.css";

import GradientText from "../../components/GradientText";
import Navbar from "@/app/components/Navbar";
const dolphins = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="https://res.cloudinary.com/dgocm6tyt/video/upload/v1754175630/dolphins_otsaj0.mp4"
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
            <div className="Head">DOLPHINS</div>
          </GradientText>
          <p className="intro-text">
            Dolphins are highly intelligent, social marine mammals known for
            their playful behavior, complex communication, and streamlined
            bodies. They belong to the order Cetacea, which also includes whales
            and porpoises.
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Lifespan:</strong> 20 - 60+ years (varies by species)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Class:</strong> Mammalia
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Order:</strong> Cetacea
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Family:</strong> Delphinidae (oceanic dolphins)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Habitat:</strong> Mostly epipelagic zone (0 - 200 m),
                  coastal and open ocean
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default dolphins;
