import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import Action, { ActionProps } from "ui/components/action/Action";
import {
  bgColorHoverableStyle
} from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

const itemStyle = TailwindStyle.builder()
  .add("p-2 w-full cursor-pointer rounded-md")
  .add(bgColorHoverableStyle({}))
  .get();

export interface ButtonDropdownContentItemProps extends ActionProps {}

const ButtonDropdownContentItem: FunctionComponent<ButtonDropdownContentItemProps> =
  (props: ButtonDropdownContentItemProps) => (
    <div className={itemStyle}>
      <Action {...props} />
    </div>
  );

export default ButtonDropdownContentItem;
