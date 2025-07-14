// LAYER 1

"use client";

import React, { useEffect, useRef, useState } from "react";
import "./Section1.css";
import SplitText from "./SplitText"; // Your custom animated text component
import Link from "next/link";
import Bot from "../components/bot";
const handleAnimationComplete = () => {
  console.log("✅ All letters have animated!");
};

const Section1: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setRevealed(true);
      }
    };

    handleScroll(); // run immediately
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className={`section1 ${revealed ? "revealed" : ""}`}>
      {mounted ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg"
          src="/videos/Layer1_alt.mp4"
        />
      ) : (
        <div className="hero-bg placeholder" />
      )}
      <Link href="/layers/l1">
        <div className="text">
          <SplitText
            text="Layer 1!"
            className="text-8xl font-bold text-white text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="right"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
      </Link>
    </div>
  );
};

export default Section1;
