import Image from "next/image";
import React from "react";
import styles from "../../styles/Settings.module.css";

type AddingProps = {
  alt?: string;
  icon: any | string;
  desc: string;
};

const Adding = ({ alt, icon, desc }: AddingProps) => (
  <div className={styles.adding_container}>
    <Image
      className={styles.adding_image}
      src={icon}
      alt={alt}
      width={40}
      height={40}
    />
    <p className={styles.adding_description}>{desc}</p>
  </div>
);
export default Adding;
