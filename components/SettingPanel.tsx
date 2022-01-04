import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Settings.module.css";
import homeStyles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

import DevicesIcon from "../public/icons/categories/periph_devices.svg";
import PrintersIcon from "../public/icons/categories/periph_printers.svg";
import MouseIcon from "../public/icons/categories/periph_mouse.svg";
import TypingIcon from "../public/icons/categories/periph_keyboard.svg";
import PenIcon from "../public/icons/categories/periph_stylet.svg";
import AutoPlayIcon from "../public/icons/categories/periph_automated.svg";
import UsbIcon from "../public/icons/categories/periph_usb.svg";

import CopyIcon from "../public/copy.svg";
import { Router, useRouter } from "next/router";

const settings = [
  {
    icon: DevicesIcon,
    text: "Devices",
    setting: "ms-settings:connecteddevices",
  },
  { icon: PrintersIcon, text: "Printers", setting: "ms-settings:printers" },
  { icon: MouseIcon, text: "Mouse", setting: "ms-settings:mousetouchpad" },
  { icon: TypingIcon, text: "Typing", setting: "ms-settings:typing" },
  { icon: PenIcon, text: "Pen & Windows Ink", setting: "ms-settings:pen" },
  { icon: AutoPlayIcon, text: "AutoPlay", setting: "ms-settings:autoplay" },
  { icon: UsbIcon, text: "USB", setting: "ms-settings:usb" },
];

const SettingPanel: NextPage = () => {
  const router = useRouter();

  return (
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

            <div
              style={{
                position: "absolute",
                right: 8,
              }}
              onClick={() =>
                router.push({
                  query: {
                    setting: encodeURI(setting.setting),
                    settings: router.query.settings,
                  },
                })
              }
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
        ))}
      </div>
    </>
  );
};

export default SettingPanel;
