"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../components/Navbar";

// Define the type for a team member
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function AboutUsPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // This is where you would fetch data in a real application.
    // For this example, we use a static array.
    const staticTeamMembers: TeamMember[] = [
      {
        name: "Alex Chen",
        role: "Principal Systems Architect",
        bio: "Alex is the visionary architect behind our platform's robust framework, ensuring its performance, scalability, and security.",
        image: "",
      },
      {
        name: "Dr. Evelyn Reed",
        role: "Chief Scientific Officer",
        bio: "Dr. Reed provides the scientific rigor that defines our content, curating all data with an unwavering commitment to accuracy.",
        image: "",
      },
      {
        name: "Sarah Miller",
        role: "Head of User Experience",
        bio: "Sarah designs and refines the platform's user interface, translating complex data into a seamless and intuitive user journey.",
        image: "",
      },
      {
        name: "David Lee",
        role: "Director of Strategic Partnerships",
        bio: "David leads our outreach efforts and collaborations, forging partnerships that amplify our mission and extend our global reach.",
        image: "",
      },
    ];
    setTeamMembers(staticTeamMembers);
  }, []);

  return (
    <div>
      {/* You can add your Navbar here */}
      <Navbar />

      {/* Header Section with a dark ocean image. Next.js handles the image */}
      <header className="header-image"></header>

      <div className="container">
        <main>
          {/* Introduction Section */}
          <section className="about-us-intro">
            <h1>About Us</h1>
            <p>
              Welcome to Marine Explorer, a powerful application dedicated to
              advancing ocean literacy and conservation. Our mission is to
              provide an immersive, scientifically grounded platform for global
              users, fostering a deeper understanding and appreciation for the
              world's oceans.
            </p>
            <p>Our platform’s core capabilities include:</p>
            <ul>
              <li>
                <strong>Stratigraphic Ocean Layers:</strong> An interactive,
                data-rich exploration of the ocean's unique zones.
              </li>
              <li>
                <strong>Conservation & Endangered Species:</strong> An
                up-to-date database on threatened marine life and global
                conservation initiatives.
              </li>
              <li>
                <strong>Dynamic Ocean News:</strong> A curated feed of the
                latest scientific discoveries and research from marine biology.
              </li>
              <li>
                <strong>Geospatial Map Interface:</strong> A powerful tool for
                locating and learning about specific marine species and their
                habitats.
              </li>
            </ul>
          </section>

          {/* Team Section with member cards */}
          <section className="team-section">
            <h2>Our Founding Team</h2>
            <div className="team-container" id="team-container">
              {teamMembers.map((member, index) => (
                <div key={index} className="member-card">
                  <Image
                    src={member.image}
                    alt={`Profile of ${member.name}`}
                    width={180}
                    height={180}
                    className="member-image"
                  />
                  <h3>{member.name}</h3>
                  <p>
                    <strong>{member.role}</strong>
                  </p>
                  <p>{member.bio}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer>
        <p>
          Marine Explorer is an initiative built on a commitment to education,
          discovery, and planetary stewardship.
        </p>
        <p>&copy; 2025 Marine Explorer. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
