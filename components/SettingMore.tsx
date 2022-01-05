import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Settings.module.css";

enum BuilderType {
  Title,
  Desc,
  Link,
}

const BuilderMap: {
  [k: string]: ({ value }: { value: string }) => JSX.Element;
} = Object.fromEntries([
  [
    BuilderType.Title,
    ({ value }: { value: string }) => (
      <p className={styles.footer_title}>{value}</p>
    ),
  ],
  [
    BuilderType.Desc,
    ({ value }: { value: string }) => (
      <p className={styles.footer_description}>{value}</p>
    ),
  ],
  [
    BuilderType.Link,
    ({ value }: { value: string }) => (
      <p className={styles.footer_link}>{value}</p>
    ),
  ],
]);

type SettingMoreBuilder = {
  type: BuilderType;
  value: string;
}[][];

const more: SettingMoreBuilder = [
  [
    { type: BuilderType.Title, value: `Turn on Bluetooth even faster` },
    {
      type: BuilderType.Desc,
      value: `To turn on Bluetooth without opening Settings, open action center, and
      then select Bluetooth icon. Do the same to turn it off when you want.`,
    },
    { type: BuilderType.Link, value: `Get more info about Bluetooth` },
  ],
  [
    { type: BuilderType.Title, value: "Related settings" },
    { type: BuilderType.Link, value: "Devices and printers" },
    { type: BuilderType.Link, value: "Sound settings" },
    { type: BuilderType.Link, value: "Display settings" },
    { type: BuilderType.Link, value: "More Bluetooth options" },
    { type: BuilderType.Link, value: "Send or receive files via Bluetooth" },
  ],
  [
    { type: BuilderType.Title, value: "Have a question ?" },
    { type: BuilderType.Link, value: "Share files over Bluetooth" },
    { type: BuilderType.Link, value: "Reinstall Bluetooth drivers" },
    { type: BuilderType.Link, value: "Fix Bluetooth connections" },
    { type: BuilderType.Link, value: "Get help" },
  ],
];

const SettingMore: NextPage = () => (
  <>
    {more.map((category, idx) => (
      <div className={styles.footer_container} key={idx}>
        {category.map((item, idx) => {
          const Block = BuilderMap[item.type];
          return <Block {...item} key={idx} />;
        })}
      </div>
    ))}
  </>
);

export default SettingMore;
