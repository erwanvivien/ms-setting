import React from "react";
import type { NextPage } from "next";

import Toggle from "./settings/Toggle";
import Checkbox from "./settings/Checkbox";

import AppIcon from "../public/icons/categories/app_default.svg";
import Adding from "./settings/Adding";

const SettingContent: NextPage = () => (
  <>
    <div>
      <h1>Bluetooth and devices</h1>
    </div>

    <Toggle title="Toogle 1" />
    <Toggle title="Toogle 2" defaultChecked={true} />

    <Checkbox
      title="Option 1"
      desc="Do you wish to toggle this shit on or not ?"
      defaultChecked={true}
    />

    <Checkbox
      title="Option 2 - A very long long long description that might - at some
      point - overflow the maximum size"
      desc="Do you wish to toggle this shit on or not ? Do you wish to toggle this
      shit on or not ? Do you wish to toggle this shit on or not ? Do you wish
      to toggle this shit on or not ? Do you wish to toggle this shit on or
      not ? Do you wish to toggle this shit on or not ?"
    />

    <Adding
      icon={AppIcon}
      desc="Description of what to add"
      alt="Add an image"
    />
  </>
);

export default SettingContent;
