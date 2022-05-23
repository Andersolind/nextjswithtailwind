import Head from "next/head";
import Hero from "../components/Hero/Hero";
import AboutUs from "../components/About/AboutUs.js";
export default function Home() {
  return (
    <div>
      <Head>
        <meta name="robots" content="follow, index" />
        <title>
          Best Custom Kitchens & Bathroom contractors in Anacaster |
          Ciszkocontracting | Best kitchen remodler in Ancaster | best kitchen
          designers in Anacaster
        </title>
        <meta property="og:url" content="https://ikeahomebuilder.com" />
        <link rel="canonical" href="https://ikeahomebuilder.com" />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="JeCc0HHrib-Cot3nHlXj0MAei9c9xUQY_6tXsP5Uu3E"
        />
        <meta property="og:site_name" content="ikeahomebuilder" />
        <meta
          property="og:description"
          content="Best designed ikea kitchen contractors in Ancaster, Burlington, Ancaster, Dundas and the GTA"
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta
          property="og:title"
          content="Best Kitchen Design & Renovation In Ancaster | Ciszkocontracting | Amazing custom Ikea Kitchens "
        />

        <meta property="article:published_time" content={Date.now()} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutUs />
    </div>
  );
}
