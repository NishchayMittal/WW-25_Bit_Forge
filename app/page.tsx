import Head from "next/head";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Vite-to-Next App</title>
      </Head>
      {/* <Navbar /> */}
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}
