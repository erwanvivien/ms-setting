import { AddingProps } from "./settings/Adding";
import { CheckboxProps } from "./settings/Checkbox";
import { ToggleProps } from "./settings/Toggle";

enum SettingTypes {
  Checkbox,
  Adding,
  Toggle,
}

type SettingCheckbox = {
  type: SettingTypes.Checkbox;
} & CheckboxProps;

type SettingAdding = {
  type: SettingTypes.Adding;
} & AddingProps;

type SettingToggle = {
  type: SettingTypes.Toggle;
} & ToggleProps;

export type SettingBuilder = (
  | SettingCheckbox
  | SettingAdding
  | SettingToggle
)[];
