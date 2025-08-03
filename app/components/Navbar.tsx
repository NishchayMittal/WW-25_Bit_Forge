"use client";

import { useState } from "react";
import Image from "next/image";
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
  const { user, isLoaded } = useUser();

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

  const protectedNavigate = (path: string) => {
    if (!user) {
      alert("Please log in to access this page.");
      return;
    }
    window.location.href = path;
  };

  return (
    <nav className="hero-navbar">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Boat Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <button
          onClick={() => (window.location.href = "/")}
          style={navButtonStyle}
        >
          <span className="text-white text-2xl font-bold">Oceanic</span>
        </button>
      </div>

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
              onClick={() => protectedNavigate("/layers/species")}
              style={navButtonStyle}
            >
              <GiSeaTurtle />
              Species
            </button>
          </li>
          <li>
            <button
              onClick={() => protectedNavigate("/game")}
              style={navButtonStyle}
            >
              <GiTreasureMap />
              Games
            </button>
          </li>
          <li>
            <button
              onClick={() => protectedNavigate("/aboutus")}
              style={navButtonStyle}
            >
              <GiDolphin />
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => protectedNavigate("/timeline")}
              style={navButtonStyle}
            >
              <GiAnchor />
              Timeline
            </button>
          </li>
          <li>
            <button
              onClick={() => protectedNavigate("/forms")}
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
            <li className="user-info">
              <button style={navButtonStyle}>
                <GiPirateHat />
                Neel
              </button>
              <UserButton afterSignOutUrl="/" />
            </li>
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
