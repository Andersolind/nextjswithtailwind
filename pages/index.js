import Head from "next/head";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/About/AboutUs.js";
export default function Home() {
  return (
    <div>
      <Head>
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content="https://ikeahomebuilder.com" />
        <link rel="canonical" href="https://ikeahomebuilder.com" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Ikea Kitchens & Bathroom contractors in Anacaster"
        />
        <title>
          Ikea kitchen & Bathroom installers in Anacaster | Ciszkocontracting
        </title>

        <meta
          name="google-site-verification"
          content="JeCc0HHrib-Cot3nHlXj0MAei9c9xUQY_6tXsP5Uu3E"
        />
        <meta property="og:site_name" content="ikeahomebuilder" />
        <meta
          property="og:description"
          content="Modern designed ikea kitchen and bathroom company in Ancaster, Burlington, Milton, Dundas and the GTA"
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta
          property="og:title"
          content="Ikea Kitchen & Bathroom Renovation In Ancaster | Ciszkocontracting | Amazing Ikea Kitchens"
        />

        <meta property="article:published_time" content={Date.now()} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutUs />
    </div>
  );
}
