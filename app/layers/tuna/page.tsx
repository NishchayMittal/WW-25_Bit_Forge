import React from "react";
import "./style.css";
import Navbar from "@/app/components/Navbar";
import GradientText from "../../components/GradientText";

const Tuna = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="https://res.cloudinary.com/dgocm6tyt/video/upload/v1754175649/tuna_oyxleo.mp4"
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
            <div className="Head">TUNA</div>
          </GradientText>
          <p className="intro-text">
            Tuna are large, fast-swimming predatory fish known for their
            strength, migratory behavior, and high commercial value. They belong
            to the family Scombridae, mainly in the genus <i>Thunnus</i>.
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Scientific family:</strong> Scombridae
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Habitat:</strong> Open ocean (epipelagic zone)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Depth range:</strong> Surface to ~500 m (mainly 0 -
                  200 m)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Diet:</strong> Fish, squid, crustaceans
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Lifespan:</strong> 5 - 30 years (varies by species)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Adaptation:</strong> Warm-blooded (rare for fish),
                  fast swimmers
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Tuna;
