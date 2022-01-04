import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Settings.module.css";

import Image from "next/image";

const SettingContent: NextPage = () => (
  <>
    <div>
      <h1>Bluetooth and devices</h1>
    </div>
    <div className={styles.toggle_container}>
      <p className={styles.toogle_title}>Toggle 1</p>
      <label className={styles.toogle_input}>
        <input type="checkbox" />
        <span className={[styles.slider, styles.round].join(" ")}></span>
      </label>
    </div>
    <div className={styles.toggle_container}>
      <p className={styles.toogle_title}>Toggle 2</p>
      <label className={styles.toogle_input}>
        <input type="checkbox" checked />
        <span className={[styles.slider, styles.round].join(" ")}></span>
      </label>
    </div>
    <div className={styles.checkbox_container}>
      <div className={styles.checkbox_input_container}>
        <input type="checkbox" className={styles.checkbox_input} checked />
        <p className={styles.checkbox_label}>Option 1</p>
      </div>
      <p className={styles.checkbox_description}>
        Do you wish to toggle this shit on or not ?
      </p>
    </div>
    <div className={styles.checkbox_container}>
      <div className={styles.checkbox_input_container}>
        <input type="checkbox" className={styles.checkbox_input} />
        <p className={styles.checkbox_label}>
          Option 2 - A very long long long description that might - at some
          point - overflow the maximum size{" "}
        </p>
      </div>
      <p className={styles.checkbox_description}>
        Do you wish to toggle this shit on or not ? Do you wish to toggle this
        shit on or not ? Do you wish to toggle this shit on or not ? Do you wish
        to toggle this shit on or not ? Do you wish to toggle this shit on or
        not ? Do you wish to toggle this shit on or not ?
      </p>
    </div>
    <div className={styles.adding_container}>
      <Image
        className={styles.adding_image}
        src="/icons/categories/app_default.svg"
        alt="Add an image"
        width={40}
        height={40}
      />
      <p className={styles.adding_description}>Description of what to add</p>
    </div>
    {/* <script src="../js/settings/scripts.js"></script> */}
  </>
);

export default SettingContent;
