import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Settings.module.css";

import SettingPanel from "../components/SettingPanel";
import SettingContent from "../components/SettingContent";
import SettingMore from "../components/SettingMore";

const Template: NextPage = () => {
  return (
    <>
      <Head>
        <title>MS Settings — Provide accurate help</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <header className={styles.header}>
          <SettingPanel />
        </header>
        <main className={styles.main}>
          <SettingContent />
        </main>
        <footer className={styles.footer}>
          <SettingMore />
        </footer>
      </div>
    </>
  );
};

export default Template;
