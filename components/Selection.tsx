import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import ComputerIcon from "../public/icons/ico_computer.svg";
import KeyboardIcon from "../public/icons/ico_keyboard.svg";
import PhoneIcon from "../public/icons/ico_phone.svg";
import NetworkIcon from "../public/icons/ico_network.svg";
import CustomizeIcon from "../public/icons/ico_customize.svg";
import AppsIcon from "../public/icons/ico_apps.svg";
import AccountIcon from "../public/icons/ico_account.svg";
import LanguagesIcon from "../public/icons/ico_languages.svg";
import GamesIcon from "../public/icons/ico_games.svg";
import AccessibilityIcon from "../public/icons/ico_accessibility.svg";
import SearchIcon from "../public/icons/ico_search.svg";
import PrivacyIcon from "../public/icons/ico_privacy.svg";
import UpdateIcon from "../public/icons/ico_update.svg";

const categories = [
  {
    icon: ComputerIcon,
    title: "System",
    description: "Display, sound, notifications, power",
  },
  {
    icon: KeyboardIcon,
    title: "Devices",
    description: "Bluetooth, printers, mouse",
  },
  {
    icon: PhoneIcon,
    title: "Phone",
    description: "Link your Android, iPhone",
  },
  {
    icon: NetworkIcon,
    title: "Network & Internet",
    description: "Wi-Fi, airplane mode, VPN",
  },
  {
    icon: CustomizeIcon,
    title: "Personalization",
    description: "Background, lock screen, colors",
  },
  {
    icon: AppsIcon,
    title: "Apps",
    description: "Uninstall, defaults, optional features",
  },
  {
    icon: AccountIcon,
    title: "Accounts",
    description: "Your accounts, email, sync, work, other people",
  },
  {
    icon: LanguagesIcon,
    title: "Time & Language",
    description: "Speech, region, date",
  },
  {
    icon: GamesIcon,
    title: "Gaming",
    description: "Xbox Game Bar, captures, Game Mode",
  },
  {
    icon: AccessibilityIcon,
    title: "Ease of Access",
    description: "Narrator, magnifier, high contrast",
  },
  {
    icon: SearchIcon,
    title: "Search",
    description: "Find my files, permissions",
  },
  {
    icon: PrivacyIcon,
    title: "Privacy",
    description: "Location, camera, microphone",
  },
  {
    icon: UpdateIcon,
    title: "Update & Security",
    description: "Windows Update, recovery, backup",
  },
];

const SettingList: NextPage = () => (
  <>
    <input
      className={styles.search_bar}
      type="search"
      placeholder="Find a setting"
    />
    <div className={styles.category_list}>
      {categories.map((category) => (
        <div
          className={styles.category}
          key={category.title}
          onClick={() => console.log(category.title)}
        >
          <Image
            className={styles.category_image}
            src={category.icon}
            alt={category.description}
            width={40}
            height={40}
          />
          <div className={styles.category_container}>
            <div className={styles.category_title}>{category.title}</div>
            <div className={styles.category_description}>
              {category.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default SettingList;
