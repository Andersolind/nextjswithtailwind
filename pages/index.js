import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
export default function Home() {
  return (
    <div>
      <head>
        <title>CISZKOCONTRACTING</title>
        <meta name="description" content="Best Kitchen and Bathroom renovations in Toronto" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Hero />
    </div>
  );
}
