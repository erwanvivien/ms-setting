import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import stylesSetting from "../styles/Settings.module.css";

import Selection from "../components/Selection";
import React from "react";
import Header from "../components/Header";
import { PossibleSettings, settingsPanel, titleMap } from "./[settings]";

const reverseTitleMap: {
  [k: string]: PossibleSettings;
} = Object.fromEntries(Object.entries(titleMap).map(([k, v]) => [v, k as any]));

const Home: NextPage = () => {
  const [myTimeout, setMyTimeout] = React.useState<NodeJS.Timeout>(null as any);
  const [content, setContent] = React.useState("");

  const [anchor, setAnchorPoint] = React.useState({ x: 0, y: 0 });
  const [show, setShow] = React.useState(false);
  const [contextMenu, setContextMenu] = React.useState({
    text: "Settings",
    settings: "ms-settings:",
  });

  const ref = React.useRef<HTMLDivElement>(null);

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

  React.useEffect(() => {
    const current = ref.current;

    const listener: (event: MouseEvent | TouchEvent) => any = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      let isLeft = (event.which || (event as MouseEvent).button) === 1;
      if (isLeft) {
        setShow(false);
        return;
      }

      const target = event.target as HTMLElement;

      let text = "";
      if (target.className === styles.category_container) {
        text = target.querySelector("div")?.innerText || "";
      } else if (target.className === styles.category_image) {
        text = target.getAttribute("alt")?.replaceAll(" Icon", "") || "";
      } else if (target.className === styles.category_description) {
        text = target.previousElementSibling?.innerHTML || "";
      } else if (target.className === styles.category_title) {
        text = target.innerText;
      }

      if (text === "") {
        text = "Settings";
      }
      text = text.replaceAll("&amp;", "&");

      const settings = settingsPanel[reverseTitleMap[text]]
        ? settingsPanel[reverseTitleMap[text]][0].setting
        : "ms-settings:";

      setContextMenu({ text, settings });
      setShow(false);
    };

    current?.addEventListener("mousedown", listener);
    current?.addEventListener("touchstart", listener);

    return () => {
      current?.removeEventListener("mousedown", listener);
      current?.removeEventListener("touchstart", listener);
    };
  }, [ref, show]);

  return (
    <>
      {show && (
        <div
          style={{
            top: anchor.y,
            left: anchor.x,
          }}
          className={stylesSetting.context_menu}
          onClick={() => {
            copySetting(
              `${window.location.protocol}//` +
                `${window.location.host}/?` +
                `redirect=${contextMenu.settings}`
            );
            setShow(false);
          }}
        >
          <p>Copy url for {contextMenu.text}</p>
        </div>
      )}
      <div
        ref={ref}
        onContextMenu={(event) => {
          event.preventDefault();
          setAnchorPoint({ x: event.pageX, y: event.pageY });
          setShow(true);
        }}
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Head>
          <title>MS Settings — Provide accurate help</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        {content && (
          <div className={styles.modal}>Copied url for {content}</div>
        )}

        <header className={styles.header}>
          <Header copy={copySetting} />
        </header>
        <main className={styles.main}>
          <Selection copy={copySetting} />
        </main>
      </div>
    </>
  );
};

export default Home;
