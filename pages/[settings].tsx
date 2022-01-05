import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Settings.module.css";

import SettingMore from "../components/SettingMore";
import SettingBuilder from "../components/SettingBuilder";
import SettingPanel from "../components/SettingPanel";
import { useRouter } from "next/router";

const Template: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>MS Settings — Provide accurate help</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <header className={styles.header}>
          <SettingPanel router={router} />
        </header>
        <main className={styles.main}>
          <SettingBuilder router={router} />
        </main>
        <footer className={styles.footer}>
          <SettingMore />
        </footer>
      </div>
    </>
  );
};

export default Template;
