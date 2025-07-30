"use client";
import Image from "next/image";
import "./style.css";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <section className="top">
          <img src="about.jpg" id="about" />
          <header>
            A healthy
            <br />
            ocean.
            <br />A thriving
            <br />
            planet.
          </header>

          <img src="awave.png" id="wave" />
        </section>

        <section className="middle">
          <div className="info">
            <h1>About Us</h1>
            <h5>
              Welcome to Oceanic Explorer – an interactive digital platform
              dedicated to the comprehensive exploration and understanding of
              the world’s oceans. Developed as an academic initiative, this
              website aims to educate, engage, and inspire users by offering
              structured and scientifically-grounded insights into the
              biological layers of the ocean. The ocean covers more than 70% of
              the Earth’s surface, yet much of it remains unexplored and
              misunderstood. With this in mind, Oceanic Explorer was created to
              bridge the gap between scientific knowledge and public awareness.
              It serves as a learning tool for students, educators, researchers,
              and ocean enthusiasts who wish to delve deeper into the diverse
              ecosystems beneath the waves.
            </h5>
            <br />
            <br />
            <h1>Our Mission</h1>
            <h5>
              Our mission is to provide an engaging and educational platform
              that promotes ocean literacy through accurate information,
              interactive tools, and enjoyable experiences. We aim to spark
              curiosity about marine life, highlight the importance of ocean
              conservation, and encourage further study of this vital part of
              our planet.
            </h5>
            <br />
            <br />
            <h1>Key Features</h1>
            <h2>In-Depth Exploration of Biological Layers:</h2>
            <h5>
              Learn about the five main ocean zones – from the epipelagic
              (sunlight) zone to the hadalpelagic (trenches) – each home to
              unique organisms and environmental conditions.
            </h5>
            <br />
            <h2>Shorts Watching:</h2>
            <h5>
              Browse a curated selection of brief, informative videos that
              visually explain oceanic phenomena, marine biology concepts, and
              fascinating underwater facts.
            </h5>
            <br />
            <h2>Interactive Games:</h2>
            <h5>
              Reinforce your understanding of ocean life through thoughtfully
              designed educational games that make learning both effective and
              fun.
            </h5>
            <h2>Bot-Powered Search:</h2>
            <h5>
              Make use of our intelligent search assistant to quickly navigate
              the site and receive detailed answers to marine-related queries.
            </h5>
            <br />
            <br />
            {/* <h1>Why We Created This Platform</h1>
          <h5>
            This project was initiated as part of an academic endeavor to
            combine web development skills with environmental education.
            Recognizing the lack of accessible and interactive resources focused
            on oceanic biology, Oceanic Explorer was envisioned as a solution to
            make complex marine science approachable for learners of all levels.
          </h5>
          <br />
          <br /> */}
            {/* <h1>Looking Ahead</h1>
          <h5>
            As we continue to grow, we plan to expand our content offerings,
            introduce more advanced features, and collaborate with experts in
            marine science to ensure accuracy and relevance. Our long-term goal
            is to evolve from a student project into a trusted resource for
            ocean education globally.
          </h5> */}
            {/* <br />
          <br /> */}
            {/* <h1>Connect With Us</h1>
          <h5>
            We welcome feedback, collaboration, and contributions. If you are an
            educator, researcher, or enthusiast interested in marine biology or
            digital learning, feel free to reach out to us through our contact
            page. Together, let's explore the ocean — one layer at a time.
          </h5> */}
            <br />
            <br />
          </div>
        </section>
        <section className="bottom">
          {/* <img src="bottom.jpg" id="bottom" /> */}
          <h6>
            📬 Contact Information
            <p>
              We welcome feedback, collaboration inquiries, and questions
              related to marine education or the platform. Feel free to reach
              out using the contact details below:
            </p>
            <br />
            📧 Email:
            <p>
              oceanicexplorer.contact@gmail.com
              <br />
              (For academic queries, feature suggestions, or support)
            </p>
            <br />
            🌐 Website:
            <br />
            <p>
              www.oceanicexplorer.org
              <br />
              (This is a placeholder — update with your actual domain)
            </p>
            <br />
            👨‍💻 Developer & Project Lead:
            <p>
              Neel Mahaske
              <br />
              Harsh Rathwa
              <br />
              Nishchay Mittal
              <br />
              Ritweek Raj
              <br />
              B.Tech Students, Marine Studies & Web Development Enthusiast
            </p>
            <br />
            📍 Location:
            <br />
            <p>India (Remote Project)</p>
            <br />
            <p>
              This platform is part of an academic initiative aimed at promoting
              ocean literacy and interactive digital learning. All inquiries
              will be responded to within 2–3 working days.
            </p>
          </h6>

          <img src="bottom.jpg" id="bottom" />
        </section>
      </div>
    </>
  );
}
