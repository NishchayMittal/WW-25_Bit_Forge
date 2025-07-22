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
import "./Hero.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

  return (
    <nav className="hero-navbar">
      <div className="flex items-center space-x-2">
        <Image
          src="/boat.png" // or your image path
          alt="Boat Logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <span className="text-white text-2xl font-bold">Oceanic</span>
      </div>

      <div className="right-menu">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-items ${menuOpen ? "open" : ""}`}>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="/layers/species">Species</Link>
          </li>
          <li>
            <Link href="/game">Games</Link>
          </li>
          <li>
            <Link href="/aboutus">AboutUs</Link>
          </li>

          <SignedOut>
            <li>
              <SignInButton mode="modal">
                <button>Login</button>
              </SignInButton>
            </li>
          </SignedOut>

          <SignedIn>
            <li>
              <button className="user-button">
                {user?.firstName || "User"}
              </button>
            </li>
            <li>
              {/* Optionally show Clerk's default user button with dropdown */}
              <UserButton afterSignOutUrl="/" />
            </li>
          </SignedIn>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
