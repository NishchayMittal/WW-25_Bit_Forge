"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../components/Navbar";
import { Instagram, Linkedin } from "lucide-react";

// Define the type for a team member
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  instagram?: string;

}

export default function AboutUsPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
 
    const staticTeamMembers: TeamMember[] = [
      {
        name: "Nishchay Mittal",
        role: "Frontend Developer",
        bio: "I build smooth, interactive ocean vibes with code. From waves to wildlife, I love turning ideas into fun, scroll-friendly experiences.",
        image: "https://media.licdn.com/dms/image/v2/D5603AQHXZnTQSC0Xmg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729319926405?e=1756944000&v=beta&t=ZUjjt0WuQ913d7s9cZtDeVHiUUK4KL_Gx3PJhyfL5z8",
        linkedin: "https://www.linkedin.com/in/nishchay-mittal",
        instagram: "https://www.instagram.com/_ndm.1501_/"
      },
      {
        name: "Neel Mhaske",
        role: "Backend Developer",
        bio: "I keep things running smoothly beneath the surface—just like the deep sea. From APIs to databases, I power the features that bring our ocean experience to life.",
        image: "/Neel.jpg",
        linkedin: "https://www.linkedin.com/in/neel-mhaske-800838343/",
        instagram: "https://www.instagram.com/solstice.neel/"
      },
      {
        name: "Ritweek Raj",
        role: "Frontend Developer",
        bio: "I design and refine the platform's user interface, translating complex data into a seamless and intuitive user journey.",
        image: "/Ritweek.jpg",
        linkedin: "https://www.linkedin.com/in/ritweek-raj-313614323/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        instagram: "https://www.instagram.com/ritweekraj_"
      },
      {
        name: "Harsh Rathwa",
        role: "Backend Developer",
        bio: "I handle the deep stuff—data, servers, and all the behind-the-scenes magic that keeps our ocean world flowing.",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFAd6kpKKcqrQ/profile-displayphoto-scale_400_400/B4DZgjdQBLGkAg-/0/1752941529498?e=1756944000&v=beta&t=KvqbODWn34dmLIQmjiE6eQpWyT5B65d9JnuHNDJeplw",
        linkedin: "https://www.linkedin.com/in/harsh-rathwa-976907312/",
        instagram: "https://www.instagram.com/haxxshs/"

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

              We're a team of ocean enthusiasts on a mission to explore, educate,
              and inspire. Through immersive visuals, real-time data, and interactive
              experiences, our site dives deep into the wonders of marine life and the
              mysteries of the ocean. Whether you're a curious learner or a passionate
              protector of the sea, welcome aboard—let’s discover the deep together. 🌍🐚
            </p>
            <p>Our platform’s core capabilities include:</p>
            <ul>
              <li>
                <strong>Our Stratigraphic Ocean Layers 🌊:</strong> An interactive,
                data-rich exploration of the ocean's unique zones.
              </li>
              <li>
                <strong>Our Timeline 📅 :</strong> Explore key milestones and events in ocean exploration and protection.

              </li>
              <li>
                <strong>Our Geospatial Map 🗺️:</strong> A powerful tool for
                locating and learning about specific marine species and their
                habitats.
              </li>
              <li>
                <strong>Our Own Game 🎮 :</strong> Dive into an exciting ocean-themed game for fun and learning.

              </li>
              <li>
                <strong>Our Ocean Bot 🤖:</strong> Chat with our intelligent assistant to explore ocean facts, species, and more.

              </li>
              <li>
                <strong>Our Ocean Shorts 🎥:</strong> Dive into bite-sized, scrollable videos showcasing ocean wonders—from rare marine species to deep-sea mysteries. Fast, fun, and packed with discovery!

              </li>
              <li>
                <strong>Our Feedback Form 📝 :</strong> Share your thoughts and help us improve your ocean experience.

              </li>

            </ul>
          </section>

          {/* Team Section with member cards */}
          <section className="team-section">
            <h2>Our Founding Team</h2>
            <div className="team-container" id="team-container">
              {teamMembers.map((member, index) => (
                <div key={index} className="member-card">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`Profile of ${member.name}`}
                      width={180}
                      height={180}
                      className="member-image"
                    />
                  ) : (
                    <div className="member-image-placeholder">No Image</div>
                  )}
                  <h3>{member.name}</h3>
                  <p>
                    <strong>{member.role}</strong>
                  </p>
                  <p>{member.bio}</p>

                  <div className="social-links">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram size={20} />
                      </a>
                    )}
                  </div>
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

      </footer>
    </div>
  );
}
