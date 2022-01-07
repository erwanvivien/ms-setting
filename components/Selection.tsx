import React from "react";

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
import Link from "next/link";
import {
  PossibleSettings,
  Setting,
  settingsPanel,
  titleMap,
} from "../pages/[settings]";
import CopyIcon from "../public/copy.svg";

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

const sanitize = (title: string) => {
  const idx = title.indexOf(" ");
  if (idx !== -1) {
    return "/" + title.substring(0, idx).toLowerCase();
  } else {
    return "/" + title.toLowerCase();
  }
};

const entries = Object.entries(settingsPanel);

type SelectionProps = {
  copy: (text: string) => void;
};

type SearchResults = Setting & {
  count: number;
  category: PossibleSettings;
};

const SearchItem = ({ r, copy }: SelectionProps & { r: SearchResults }) => (
  <div className={styles.result_container}>
    <Image src={r.icon} alt={r.text} width={40} height={40} />
    <p className={styles.result_text}>
      {titleMap[r.category]} &gt; {r.text}
    </p>
    <Image
      className={styles.header_clickable_img}
      src={CopyIcon}
      alt="Copy icon"
      width={30}
      height={30}
      onClick={() =>
        copy(
          `${window.location.protocol}//` +
            `${window.location.host}/?` +
            `redirect=${r.setting}`
        )
      }
    />
  </div>
);

type CategoryProps = {
  icon: any;
  title: string;
  description: string;
};

const CategoryItem = ({ category }: { category: CategoryProps }) => (
  <Link href={sanitize(category.title)}>
    <a className={styles.category}>
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
    </a>
  </Link>
);

const Selection = ({ copy }: SelectionProps) => {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState<SearchResults[]>([]);

  const update = (text: string) => {
    setSearch(text);
    if (!text) {
      setResults([]);
      return;
    }

    const res = entries.map(([k, v]) =>
      v.map((item) => {
        if (!item.icon)
          return { ...item, count: 0, category: k as PossibleSettings };

        let match = 0;
        if (item.text.includes(text)) {
          match += 5;
        }

        if (!item.keywords)
          return { ...item, count: match, category: k as PossibleSettings };

        item.keywords.forEach((key) => {
          if (key.includes(text)) {
            match += 1;
          }
        });

        return { ...item, count: match, category: k as PossibleSettings };
      })
    );

    const found = res
      .map((r) => r.filter((p) => p.count > 0))
      .filter((empty) => empty.length !== 0)
      .reduce((prev, next) => prev.concat(next), [])
      .sort((a, b) => b.count - a.count);

    setResults(found.slice(0, 5));
  };

  return (
    <>
      <input
        className={styles.search_bar}
        type="search"
        placeholder="Find a setting"
        value={search}
        onChange={(event) => update(event.target.value)}
      />

      {results &&
        results.length !== 0 &&
        results.map((r) => <SearchItem key={r.setting} copy={copy} r={r} />)}

      <div className={styles.category_list}>
        {categories.map((category) => (
          <CategoryItem key={category.title} category={category} />
        ))}
      </div>
    </>
  );
};

export default Selection;
