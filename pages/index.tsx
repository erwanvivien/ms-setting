import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import SettingList from "../components/Selection";
import React from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>MS Settings — Provide accurate help</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <SettingList />
      </main>
    </>
  );
};

export default Home;
