import React from "react";

import Image from "next/image";

import SettingMatch, { SettingBuilder, SettingTypes } from "./settings_types";

import AppIcon from "../public/icons/categories/app_default.svg";
import CopyIcon from "../public/copy.svg";

import styles from "../styles/Home.module.css";

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

type SettingBuilderProps = {
  title: string;
  setting: string;
  copy: (text: string) => void;
};

const SettingBuilder = ({ title, copy, setting }: SettingBuilderProps) => {
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
          onClick={() => {
            const basePath =
              `${window.location.protocol}//` +
              `${window.location.host}/` +
              `${title}?` +
              `setting=${setting}`;

            copy(basePath);
          }}
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
