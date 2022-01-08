import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Settings.module.css";
import Link from "next/link";

enum BuilderType {
  Title,
  Desc,
  Link,
}

type BuilderTypeTitle = {
  type: BuilderType.Title;
  value: string;
};

type BuilderTypeDesc = {
  type: BuilderType.Desc;
  value: string;
};

type BuilderTypeLink = {
  type: BuilderType.Link;
  value: string;
  href: string;
};

type SettingMoreBuilderItem =
  | BuilderTypeTitle
  | BuilderTypeDesc
  | BuilderTypeLink;

type SettingMoreBuilder = SettingMoreBuilderItem[][];

const BuilderMap: {
  [k: string]: ({ value }: { value: string }) => JSX.Element;
} = Object.fromEntries([
  [
    BuilderType.Title,
    ({ value }: BuilderTypeTitle) => (
      <p className={styles.footer_title}>{value}</p>
    ),
  ],
  [
    BuilderType.Desc,
    ({ value }: BuilderTypeDesc) => (
      <p className={styles.footer_description}>{value}</p>
    ),
  ],
  [
    BuilderType.Link,
    ({ value, href }: BuilderTypeLink) => (
      <p className={styles.footer_link}>
        <Link href={href}>
          <a>{value}</a>
        </Link>
      </p>
    ),
  ],
]);

const more: SettingMoreBuilder = [
  [
    { type: BuilderType.Title, value: `MS Setting` },
    {
      type: BuilderType.Desc,
      value: `Ever wanted to provided accurate help ?`,
    },
    {
      type: BuilderType.Desc,
      value: `You can now provide a link to direct settings.
      This accurate help help breaking the language barrier,
      removes tons of pictures from tutorials (saving storage, energy and data)`,
    },
    {
      type: BuilderType.Desc,
      value: `It's very powerful`,
    },
    {
      type: BuilderType.Link,
      value: `Try it yourself`,
      href: `http://localhost:3000/?redirect=ms-settings:`,
    },
  ],
  [
    { type: BuilderType.Title, value: `Github` },
    {
      type: BuilderType.Link,
      value: `Want to help the project ?`,
      href: "https://github.com/erwanvivien/ms-setting",
    },
  ],
  [
    { type: BuilderType.Title, value: `How does it work ?` },
    {
      type: BuilderType.Link,
      value: `More info in project README`,
      href: "https://github.com/erwanvivien/ms-setting#ms-settings",
    },
    {
      type: BuilderType.Link,
      value: `Microsoft doc (ms-settings:)`,
      href: "https://docs.microsoft.com/en-us/windows/uwp/launch-resume/launch-settings-app",
    },
  ],
  [{ type: BuilderType.Title, value: `Thanks for using MS Setting` }],
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
