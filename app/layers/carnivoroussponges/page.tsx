import React from "react";
import "./style.css";

import GradientText from "../../components/GradientText";
import Navbar from "@/app/components/Navbar";
const carnivoroussponges = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <video
          className="background-video"
          src="/videos/carnivoroussponges.mp4"
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
            <div className="Head">CARNIVOROUS SPONGES</div>
          </GradientText>
          <p className="intro-text">
            Carnivorous sponges are a rare and fascinating group of sponges that
            eat animals, rather than relying on passive filter-feeding like most
            other sponges.
          </p>

          <h3>Overview</h3>
          <table className="info-table">
            <tbody>
              <tr>
                <td>
                  <strong>Class:</strong> Demospongiae (mostly)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Phylum:</strong> Porifera
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Order:</strong> Cetacea
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Family:</strong> Cladorhizidae (main family)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Body:</strong>: harps, nets, or claws.
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default carnivoroussponges;
