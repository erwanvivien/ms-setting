import Adding, { AddingProps } from "./settings/Adding";
import Checkbox, { CheckboxProps } from "./settings/Checkbox";
import Toggle, { ToggleProps } from "./settings/Toggle";

export enum SettingTypes {
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

const SettingMatchEntries = [
  [SettingTypes.Checkbox, Checkbox],
  [SettingTypes.Adding, Adding],
  [SettingTypes.Toggle, Toggle],
];

const SettingMatch = Object.fromEntries(SettingMatchEntries);

export type SettingBuilder = (
  | SettingCheckbox
  | SettingAdding
  | SettingToggle
)[];

export default SettingMatch;
