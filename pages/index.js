import Head from "next/head";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/About/AboutUs.js";
export default function Home() {
  return (
    <div>
      <Head>
        <meta name="robots" content="follow, index" />
        <title>
          Toronto Kitchen and Bathroom Kitchen Remodelers | Ciszkocontracting
        </title>
        <meta property="og:url" content="http://ikeahomebuilder.com" />
        <link rel="canonical" href="http://ikeahomebuilder.com" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="JeCc0HHrib-Cot3nHlXj0MAei9c9xUQY_6tXsP5Uu3E"
        />
        <meta property="og:site_name" content="Ciszkocontracting" />
        <meta
          property="og:description"
          content="Ikea home planner Ancaster | Toronto Kitchen and Bathroom Kitchen Remodelers | Oakvile | Hamilton"
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta
          property="og:title"
          content="
           | CISZKOCONTRACTING | Toronto Kitchen and Bathroom Kitchen Remodelers ,
          Oakville and Mississauga"
        />

        <meta property="article:published_time" content={Date.now()} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutUs />
    </div>
  );
}
