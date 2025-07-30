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

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

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
            <Link href="#">
              <GiAnchor />
              Home
            </Link>
          </li>
          <li>
            <Link href="/layers/species">
              <GiSeaTurtle />
              Species
            </Link>
          </li>
          <li>
            <Link href="/game">
              <GiTreasureMap />
              Games
            </Link>
          </li>
          <li>
            <Link href="/aboutus">
              <GiDolphin />
              About Us
            </Link>
          </li>

          <li>
            <Link href="/forms">Forms</Link>
          </li>

          <SignedOut>
            <li>
              <SignInButton mode="modal">
                <button>
                  <GiPirateHat />
                  Login
                </button>
              </SignInButton>
            </li>
          </SignedOut>

          <SignedIn>
            <li>
              <button className="user-button">
                <GiPirateHat />
                {user?.firstName || "User"}
              </button>
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
