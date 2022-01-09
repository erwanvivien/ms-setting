import React from "react";
import Image from "next/image";

import styles from "../styles/Settings.module.css";
import homeStyles from "../styles/Home.module.css";

import CopyIcon from "../public/copy2.svg";

type SettingImageProps = {
  page: string;
  image: StaticImageData;
  copyCurrent: () => void;
};

const SettingImage = ({ page, image, copyCurrent }: SettingImageProps) => (
  <>
    <div className={styles.panel_copy} onClick={() => copyCurrent()}>
      <Image
        src={CopyIcon}
        className={homeStyles.header_clickable_img}
        alt="Copy icon"
        title="Copy icon"
        width={50}
        height={50}
      />
      <p>Copy url</p>
    </div>
    <div className={styles.setting_builder_container}>
      {image && (
        <Image
          src={image}
          alt={`Setting page for ${page}`}
          placeholder="blur"
          width={1250}
          height={1010}
          quality={95}
          layout="fixed"
        />
      )}
    </div>
  </>
);

export default SettingImage;
