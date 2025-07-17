"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Section5.css";
import SplitText from "./SplitText";
import Link from "next/link";

const handleAnimationComplete = () => {
  console.log("✅ All letters have animated!");
};

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
          src="/videos/Layer5.mp4"
        />
      ) : (
        <div className="hero-bg placeholder" />
      )}
      <Link href="/layers/l5">
        <div className="center-text">
          <div className="text-line">
            <SplitText
              text="Hadal"
              className="text-8xl font-bold text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div className="text-line">
            <SplitText
              text="A mystery waiting to be unraveled"
              className="text-4xl font-semibold text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Section5;
