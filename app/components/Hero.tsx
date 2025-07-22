"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
  ClerkProvider,
} from "@clerk/nextjs";
import "./Hero.css";
import Navbar from "./Navbar";
import Script from "next/script";
import Bot from "../components/bot";
import Link from "next/link";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [beamStyle, setBeamStyle] = useState({ width: 0, angle: 0 });
  const [mounted, setMounted] = useState(false);
  const beamOrigin = { x: 390, y: 10 };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - beamOrigin.x;
    const dy = mouseY - beamOrigin.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    setBeamStyle({ width: distance, angle });
  };

  if (!mounted) return null;

  return (
    <div className="hero" onMouseMove={handleMouseMove} ref={heroRef}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hero-bg"
        src="/videos/hero.mp4"
      />

      <div
        className="beam"
        style={{
          width: `${beamStyle.width}px`,
          transform: `translate(${beamOrigin.x}px, ${
            beamOrigin.y - 20
          }px) rotate(${beamStyle.angle}deg)`,
        }}
      />

      <Navbar />

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ocean and Web exploration project
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          An experience through layers of ocean
        </motion.p>

        {/* Scripts for Botpress */}
        <Script
          src="https://cdn.botpress.cloud/webchat/v3.1/inject.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://files.bpcontent.cloud/2025/07/10/16/20250710161048-3WXS4PPU.js"
          strategy="afterInteractive"
        />
        <ClerkProvider>
          {/* Auth-based buttons */}
          <SignedIn>
            <Link href="/layers/marine-shorts">
              <motion.button
                className="hero-button"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                Start Exploring
              </motion.button>
            </Link>
          </SignedIn>

          <SignedOut>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <SignInButton mode="modal">
                <button className="hero-button">Sign In to Explore</button>
              </SignInButton>
            </motion.div>
          </SignedOut>
        </ClerkProvider>
      </motion.div>

      <Bot />
    </div>
  );
};

export default Hero;
