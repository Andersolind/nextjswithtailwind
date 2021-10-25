import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mississauga Bathroom Renovations </title>
        <meta
          name="description"
          content="Best Kitchen and Bathroom Renovations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
    </div>
  );
};

export default Home;
