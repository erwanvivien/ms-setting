import React from "react";

import styles from "../styles/Settings.module.css";
import Image from "next/image";
import Link from "next/link";

import { Setting } from "../pages/[settings]";

type SettingPanelProps = {
  icons: Setting[];
  title: string;
  select: React.Dispatch<React.SetStateAction<number>>;
};

type PanelItemProps = {
  setting: Setting;
  select: React.Dispatch<React.SetStateAction<number>>;
  index: number;
};

const PanelItem = ({ setting, select, index }: PanelItemProps) => {
  if (!setting.icon) {
    return <div className={styles.spacer}></div>;
  }

  return (
    <div className={styles.header_list_item} onClick={() => select(index)}>
      <Image
        className={styles.header_list_item_image}
        src={setting.icon}
        alt={`${setting.text} Icon`}
        title={`${setting.text} Icon`}
        about={`${setting.text} Icon`}
        width={30}
        height={30}
      />

      <p className={styles.header_list_item_text}>{setting.text}</p>
    </div>
  );
};

const SettingPanel = (props: SettingPanelProps) => (
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

    <h3 className={styles.header_title}>{props.title}</h3>

    <div className={styles.header_list}>
      {props.icons.map((setting, idx) => (
        <PanelItem
          key={setting.text}
          select={props.select}
          setting={setting}
          index={idx}
        />
      ))}
    </div>
  </>
);

export default SettingPanel;
