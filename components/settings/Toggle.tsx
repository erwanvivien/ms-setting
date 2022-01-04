import React from "react";
import styles from "../../styles/Settings.module.css";

type ToggleProps = {
  defaultChecked?: boolean;
  title: string;
};

const Toggle = ({ defaultChecked, title }: ToggleProps) => (
  <div className={styles.toggle_container}>
    <p className={styles.toogle_title}>{title}</p>
    <label className={styles.toogle_input}>
      <input type="checkbox" defaultChecked={defaultChecked} />
      <span className={[styles.slider, styles.round].join(" ")}></span>
    </label>
  </div>
);

export default Toggle;
