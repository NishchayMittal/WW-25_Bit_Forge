"use client";
import Image from "next/image";
import { useEffect } from "react";
import { game } from "./script";

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
