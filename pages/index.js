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
        <title>
          CISZKOCONTRACTING | Best Kitchen and Bathroom renovations in Toronto ,
          Oakville and Mississauga{" "}
        </title>
        <meta
          name="description"
          content="Best Kitchen and Bathroom renovations in Toronto"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
    </div>
  );
}
