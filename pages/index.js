import Head from "next/head";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/About/AboutUs.js";
export default function Home() {
  return (
    <div>
      <Head>
        <meta name="robots" content="follow, index" />
        <title>
          Etobicoke Kitchen and Bathroom Renovation | Ciszkocontracting
        </title>
        <meta property="og:url" content="https://ikeahomebuilder.com" />
        <link rel="canonical" href="https://ikeahomebuilder.com" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="JeCc0HHrib-Cot3nHlXj0MAei9c9xUQY_6tXsP5Uu3E"
        />
        <meta property="og:site_name" content="Ciszkocontracting" />
        <meta
          property="og:description"
          content="Ikea home planner Ancaster | Ancaster Kitchen and Bathroom renovation | Oakvile | Hamilton"
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta
          property="og:title"
          content="
           | CISZKOCONTRACTING | Ancaster Kitchen and Bathroom renovation ,
         Toronto, Oakville and Mississauga"
        />

        <meta property="article:published_time" content={Date.now()} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutUs />
    </div>
  );
}
