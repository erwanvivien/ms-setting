import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Settings.module.css";
import Image from "next/image";
import Link from "next/link";

import devicesIcon from "../public/icons/categories/periph_devices.svg";
import printersIcon from "../public/icons/categories/periph_printers.svg";
import mouseIcon from "../public/icons/categories/periph_mouse.svg";

const settings = [
  {
    icon: devicesIcon,
    text: "Devices",
  },
  { icon: printersIcon, text: "Printers" },
  { icon: mouseIcon, text: "Mouse" },
];

const SettingPanel: NextPage = () => (
  <>
    <p className={styles.header_back}>Settings</p>
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

    <h3 className={styles.header_title}>settingTitle</h3>

    <div className={styles.header_list}>
      {settings.map((setting) => (
        <div className={styles.header_list_item} key={setting.text}>
          <Image
            className={styles.header_list_item_image}
            src={setting.icon}
            alt={`${setting.text} Icon`}
            width={40}
            height={40}
          />
          <p className={styles.header_list_item_text}>{setting.text}</p>
        </div>
      ))}
    </div>
  </>
);

export default SettingPanel;
