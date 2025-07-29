"use client";

import React from "react";
import "./style.css";

import Image from "next/image";
import { useEffect } from "react";
import { game } from "./script";
import Navbar from "../components/Navbar";
export default function Home() {
  useEffect(() => {
    game();
  }, []);
  return (
    <div>
      <canvas id="canvas1"></canvas>
    </div>
  );
}
