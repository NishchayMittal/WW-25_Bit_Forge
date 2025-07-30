"use client";

import React, { useEffect } from "react";
import "./style.css";

import { game } from "./script";
import Navbar from "../components/Navbar";

export default function Home() {
  useEffect(() => {
    game();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {/* Canvas for the game */}
        <canvas id="canvas1"></canvas>
      </div>
    </>
  );
}
