"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserButton,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import {
  GiDolphin,
  GiSeaTurtle,
  GiTreasureMap,
  GiAnchor,
  GiPirateHat,
} from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

  const navButtonStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    color: "inherit",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5em",
    font: "inherit",
    padding: 0,
  };

  return (
    <nav className="hero-navbar">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Boat Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <span className="text-white text-2xl font-bold">Oceanic</span>
      </div>

      {/* Menu Section */}
      <div className="right-menu">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-items ${menuOpen ? "open" : ""}`}>
          <li>
            <button
              onClick={() => (window.location.href = "/")}
              style={navButtonStyle}
            >
              <GiAnchor />
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => (window.location.href = "/layers/species")}
              style={navButtonStyle}
            >
              <GiSeaTurtle />
              Species
            </button>
          </li>
          <li>
            <button
              onClick={() => (window.location.href = "/game")}
              style={navButtonStyle}
            >
              <GiTreasureMap />
              Games
            </button>
          </li>
          <li>
            <button
              onClick={() => (window.location.href = "/aboutus")}
              style={navButtonStyle}
            >
              <GiDolphin />
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => (window.location.href = "/timeline")}
              style={navButtonStyle}
            >
              <GiAnchor />
              Timeline
            </button>
          </li>

          <li>
            <button
              onClick={() => (window.location.href = "/forms")}
              style={navButtonStyle}
            >
              <FaWpforms />
              Forms
            </button>
          </li>

          <SignedOut>
            <li>
              <SignInButton mode="modal">
                <button style={navButtonStyle}>
                  <GiPirateHat />
                  Login
                </button>
              </SignInButton>
            </li>
          </SignedOut>

          <SignedIn>
            <li>
              <p className="user-button" style={navButtonStyle}>
                <GiPirateHat />
                {user?.firstName || "User"}
              </p>
            </li>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
