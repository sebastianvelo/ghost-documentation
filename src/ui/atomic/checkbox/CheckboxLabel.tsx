import StyleableProps from "ui/common/props/StyleableProps";
import { FunctionComponent } from "react";

export interface CheckboxLabelProps extends StyleableProps {
  label?: string;
}

const CheckboxLabel: FunctionComponent<CheckboxLabelProps> = (
  props: CheckboxLabelProps
) => (
  <div className={`space-x-2 px-2 flex justify-center items-center`}>
    <input type="checkbox" />
    <span>{props.label}</span>
  </div>
);

export default CheckboxLabel;
