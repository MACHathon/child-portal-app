import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/login/login";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Retailer Portal - Login</title>
        <meta name="description" content="Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full md:w-96 lg:w-96">
        <Login />
      </main>
    </div>
  );
};

export default Home;
