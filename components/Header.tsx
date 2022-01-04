import React from "react";

import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import CopyIcon from "../public/copy.svg";

const Header: NextPage = () => {
  const [copiedVisibility, setCopiedVisibility] = React.useState(false);
  const [myTimeout, setMyTimeout] = React.useState<NodeJS.Timeout>(null as any);

  const showCopied = () => {
    clearTimeout(myTimeout);
    const timeout = setTimeout(() => {
      setCopiedVisibility(false);
    }, 1000);

    setCopiedVisibility(true);
    setMyTimeout(timeout);
  };

  return (
    <>
      <div className={styles.header_account}>
        <Image
          className={styles.header_account_img}
          src="https://thispersondoesnotexist.com/image"
          alt="Random profile picture"
          width={115}
          height={115}
        />
        <div>
          <h1 className={styles.header_title}>MS Setting</h1>
          <p className={styles.header_description}>contact@ms-setting.com</p>
          <p className={styles.header_description_link}>My Microsoft account</p>
        </div>
      </div>

      <div className={styles.header_clickable}>
        <div>
          {copiedVisibility && (
            <div className={styles.header_clickable_confirmation}>Copied !</div>
          )}
          <Image
            id="copy"
            className={styles.header_clickable_Image}
            src={CopyIcon}
            alt="Copy icon"
            width={40}
            height={40}
            onClick={showCopied}
          />
          <a
            className={styles.header_clickable_description_link}
            href="ms-settings:"
          >
            Test content
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
