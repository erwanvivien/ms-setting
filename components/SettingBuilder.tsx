import React from "react";

import Image from "next/image";
import { NextRouter } from "next/router";

import SettingMatch, { SettingBuilder, SettingTypes } from "./settings_types";

import AppIcon from "../public/icons/categories/app_default.svg";
import CopyIcon from "../public/copy.svg";

import styles from "../styles/Home.module.css";
import { PossibleSettings, titleMap } from "./SettingPanel";

const builder: SettingBuilder = [
  {
    type: SettingTypes.Toggle,
    defaultChecked: false,
    title: "Toogle 1",
  },
  {
    type: SettingTypes.Toggle,
    defaultChecked: true,
    title: "Toogle 2",
  },
  {
    type: SettingTypes.Checkbox,
    title: "Option 1",
    desc: "Do you wish to toggle this shit on or not ?",
    defaultChecked: true,
  },
  {
    type: SettingTypes.Checkbox,
    title: `Option 2 - A very long long long description that might - at some
    point - overflow the maximum size`,
    desc: `Do you wish to toggle this shit on or not ? Do you wish to toggle this
    shit on or not ? Do you wish to toggle this shit on or not ? Do you wish
    to toggle this shit on or not ? Do you wish to toggle this shit on or
    not ? Do you wish to toggle this shit on or not ?`,
  },
  {
    type: SettingTypes.Adding,
    icon: AppIcon,
    desc: "Description of what to add",
    alt: "Add an image",
  },
];

const SettingBuilder = ({ router }: { router: NextRouter }) => {
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    if (
      router.query &&
      typeof router.query.settings === "string" &&
      router.query.settings in titleMap
    ) {
      const setting = router.query.settings as PossibleSettings;
      setTitle(titleMap[setting]);
    }
  }, [router, router.query]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <h1>{title}</h1>

        <Image
          id="copy"
          className={styles.header_clickable_img}
          src={CopyIcon}
          alt="Copy icon"
          width={40}
          height={40}
        />
      </div>

      <h3>This could be any random settings</h3>

      {builder.map((block, index) => {
        const Block = SettingMatch[block.type];
        return <Block key={index} {...block} />;
      })}
    </>
  );
};

export default SettingBuilder;
