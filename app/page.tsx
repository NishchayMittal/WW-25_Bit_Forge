import Head from 'next/head';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

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
    </>
  );
}
