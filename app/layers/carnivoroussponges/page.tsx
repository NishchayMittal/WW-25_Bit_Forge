import React from "react";
import "./style.css";
const carnivoroussponges = () => {
  return (
    <div>
      <div className="video-section">
        <video src="/videos/carnivoroussponges.mp4" loop autoPlay muted></video>
        <section className="video-copy">
          <header>
            <h1>CARNIVOROUS SPONGES</h1>
          </header>
          <p>
            Carnivorous sponges are a rare and fascinating group of sponges that
            eat animals, rather than relying on passive filter-feeding like most
            other sponges.
          </p>
          <br />
          <h3>Overview</h3>
          <table>
            <tr>
              <td>Class : Demospongiae (mostly)</td>
            </tr>
            <tr>
              <td>Order : Cetacea</td>
            </tr>
            <tr>
              <td>Family : Cladorhizidae (main family)</td>
            </tr>
            <tr>
              <td>Phylum : Porifera</td>
            </tr>
            <tr>
              <td>Body : harps, nets, or claws.</td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default carnivoroussponges;
