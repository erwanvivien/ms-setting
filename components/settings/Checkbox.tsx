import React from "react";
import styles from "../../styles/Settings.module.css";

type CheckboxProps = {
  defaultChecked?: boolean;
  title: string;
  desc: string;
};

const Checkbox = ({ defaultChecked, title, desc }: CheckboxProps) => (
  <div className={styles.checkbox_container}>
    <div className={styles.checkbox_input_container}>
      <input
        type="checkbox"
        className={styles.checkbox_input}
        defaultChecked={defaultChecked}
      />
      <p className={styles.checkbox_label}>{title}</p>
    </div>
    <p className={styles.checkbox_description}>{desc}</p>
  </div>
);

export default Checkbox;
