import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SignUp from "../components/signup/signup";
import { Box, Text, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div className={styles.containerRegister}>
      <Head>
        <title>Toykens!</title>
        <meta name="description" content="Toyken" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading as="h1" size="lg" marginBottom="8">
        Create an account for your child
      </Heading>
      <main className="w-full md:w-96 lg:w-96">
        <SignUp />
      </main>
    </div>
  );
};

export default Home;
