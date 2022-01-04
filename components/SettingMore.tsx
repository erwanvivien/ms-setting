import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Settings.module.css";

const SettingMore: NextPage = () => (
  <>
    <div className={styles.footer_container}>
      <p className={styles.footer_title}>Turn on Bluetooth even faster</p>
      <p className={styles.footer_description}>
        To turn on Bluetooth without opening Settings, open action center, and
        then select Bluetooth icon. Do the same to turn it off when you want.
      </p>
      <p className={styles.footer_link}>Get more info about Bluetooth</p>
    </div>
    <div className={styles.footer_container}>
      <p className={styles.footer_title}>Related settings</p>
      <p className={styles.footer_link}>Devices and printers</p>
      <p className={styles.footer_link}>Sound settings</p>
      <p className={styles.footer_link}>Display settings</p>
      <p className={styles.footer_link}>More Bluetooth options</p>
      <p className={styles.footer_link}>Send or receive files via Bluetooth</p>
    </div>

    <div className={styles.footer_container}>
      <p className={styles.footer_title}>Have a question ?</p>
      <p className={styles.footer_link}>Share files over Bluetooth</p>
      <p className={styles.footer_link}>Reinstall Bluetooth drivers</p>
      <p className={styles.footer_link}>Fix Bluetooth connections</p>
      <p className={styles.footer_link}>Get help</p>
    </div>
  </>
);

export default SettingMore;
