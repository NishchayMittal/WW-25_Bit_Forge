// LAYER 3

"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Section3.css";
import SplitText from "./SplitText";
import Link from "next/link";
import { Black_Ops_One } from "next/font/google";
const handleAnimationComplete = () => {
  console.log("✅ All letters have animated!");
};
const blackOpsOne = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
});

const Section3: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
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
      className={`section2 ${revealed ? "revealed sub-cursor" : ""}`}
    >
      {mounted ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg"
          src="/videos/Layer3.mp4"
        />
      ) : (
        <div className="hero-bg placeholder" />
      )}
      <Link href="/layers/l3">
        <div className="center-text">
          <SplitText
            text="Midnight"
            className="text-title winky-font"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </Link>
    </div>
  );
};

export default Section3;
