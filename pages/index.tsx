import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import Selection from "../components/Selection";
import React from "react";
import Header from "../components/Header";

const Home: NextPage = () => {
  const [myTimeout, setMyTimeout] = React.useState<NodeJS.Timeout>(null as any);
  const [content, setContent] = React.useState("");

  const copySetting = (text: string) => {
    if (!text.includes("ms-settings:")) {
      return;
    }

    const redirect = text.substring(text.indexOf("ms-settings:"));

    clearTimeout(myTimeout);
    navigator.clipboard.writeText(text);

    const t = setTimeout(() => {
      setContent("");
    }, 1500);

    setContent(redirect);
    setMyTimeout(t);
  };

  return (
    <>
      <Head>
        <title>MS Settings — Provide accurate help</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {content && <div className={styles.modal}>Copied url for {content}</div>}

      <header className={styles.header}>
        <Header copy={copySetting} />
      </header>
      <main className={styles.main}>
        <Selection copy={copySetting} />
      </main>
    </>
  );
};

export default Home;
