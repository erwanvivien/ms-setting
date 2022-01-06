import React from "react";

import Image from "next/image";
import styles from "../styles/Home.module.css";

import CopyIcon from "../public/copy.svg";

type HeaderProps = {
  copy: (text: string) => void;
};

const Header = ({ copy }: HeaderProps) => {
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
          <Image
            id="copy"
            className={styles.header_clickable_img}
            src={CopyIcon}
            alt="Copy icon"
            width={40}
            height={40}
            onClick={() =>
              copy(
                `${window.location.protocol}//` +
                  `${window.location.host}/?` +
                  `redirect=ms-settings:`
              )
            }
          />
        </div>
      </div>
    </>
  );
};

export default Header;
