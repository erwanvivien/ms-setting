import React from "react";
import Image from "next/image";

import stylesSetting from "../styles/Settings.module.css";

type SettingImageProps = {
  page: string;
  image: StaticImageData;
};

const SettingImage = ({ page, image }: SettingImageProps) => {
  return (
    <div className={stylesSetting.setting_builder_container}>
      {image && (
        <Image
          src={image}
          alt={`Setting page for ${page}`}
          // layout="fill"
          quality={95}
        />
      )}
    </div>
  );
};

export default SettingImage;
