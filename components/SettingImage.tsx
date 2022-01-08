import React from "react";
import Image from "next/image";

import styles from "../styles/Settings.module.css";

type SettingImageProps = {
  page: string;
  image: StaticImageData;
};

const SettingImage = ({ page, image }: SettingImageProps) => {
  return (
    <div className={styles.setting_builder_container}>
      {image && (
        <Image
          src={image}
          alt={`Setting page for ${page}`}
          // layout="fill"
          width={1250}
          height={1010}
          quality={95}
          layout="fixed"
        />
      )}
    </div>
  );
};

export default SettingImage;
