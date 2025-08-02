"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Section5.css";
import SplitText from "./SplitText";
import Link from "next/link";
import { Black_Ops_One } from "next/font/google";
import { Barlow } from "next/font/google";
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "700"] });
const handleAnimationComplete = () => {
  console.log("✅ All letters have animated!");
};
const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
});

const Section5: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`section5 ${revealed ? "revealed sub-cursor" : ""}`}
    >
      {mounted ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg"
          src="https://res.cloudinary.com/dgocm6tyt/video/upload/v1754175309/Layer5_rp251w.mp4"
        />
      ) : (
        <div className="hero-bg placeholder" />
      )}
      <Link href="/layers/l5">
        <div className="center-text">
          <div className="my-text">Hadal</div>
          <div className="barlow-text">A mystery waiting to be unraveled</div>
        </div>
      </Link>
    </div>
  );
};

export default Section5;
