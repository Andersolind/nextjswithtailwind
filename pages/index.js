import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/about/about";
export default function Home() {
  return (
    <div>
      <Head>
        <meta name="robots" content="follow, index" />

        <meta property="og:url" content="http://ikeahomebuilder.com" />
        <link rel="canonical" href="http://ikeahomebuilder.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ciszkocontracting" />
        <meta
          property="og:description"
          content="Best Kitchen and Bathroom renovations in Toronto | Oakvile | Hamilton"
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta
          property="og:title"
          content="CISZKOCONTRACTING | Best Kitchen and Bathroom renovations in Toronto ,
          Oakville and Mississauga"
        />

        <meta property="article:published_time" content={Date.now()} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
    </div>
  );
}
