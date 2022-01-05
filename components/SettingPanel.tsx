import React from "react";

import styles from "../styles/Settings.module.css";
import homeStyles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import CopyIcon from "../public/copy.svg";
import { Setting } from "../pages/[settings]";

type SettingPanelProps = {
  icons: Setting[];
  title: string;
  page: string;
};

const SettingPanel = ({ icons, title, page }: SettingPanelProps) => {
  return (
    <>
      <Link href="/">
        <a className={[styles.header_home, styles.header_home_link].join(" ")}>
          <Image
            src="/icons/categories/home.png"
            alt="Home icon"
            width={40}
            height={40}
          />
          <p>Home</p>
        </a>
      </Link>

      <div className={styles.header_search_container}>
        <input className={styles.header_search} />
      </div>

      <h3 className={styles.header_title}>{title}</h3>

      <div className={styles.header_list}>
        {icons.map((setting) => {
          if (!setting.icon) {
            return <div style={{ height: 60 }} key={setting.text}></div>;
          }

          return (
            <div className={styles.header_list_item} key={setting.text}>
              <Image
                className={styles.header_list_item_image}
                src={setting.icon}
                alt={`${setting.text} Icon`}
                width={40}
                height={40}
              />
              <p className={styles.header_list_item_text}>{setting.text}</p>

              <div
                style={{
                  position: "absolute",
                  right: 8,
                }}
                onClick={() => {
                  const basePath =
                    `${window.location.protocol}//` +
                    `${window.location.host}/` +
                    `${page}?` +
                    `setting=${setting.setting}`;

                  console.log(basePath);
                  navigator.clipboard.writeText(basePath);
                }}
              >
                <Image
                  className={homeStyles.header_clickable_img}
                  src={CopyIcon}
                  alt="Copy icon"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SettingPanel;
