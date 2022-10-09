import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { ActionProps } from "ui/components/action/Action";
import {
  bgColorStyle, transitionStyle
} from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";
import ButtonDropdownContentItem from "./item/ButtonDropdownContentItem";

const contentStyle = TailwindStyle.builder()
  .add(transitionStyle())
  .add("flex flex-col w-28 shadow-xl")
  .add("border border-dark-light rounded-md")
  .add("absolute left-2 z-40")
  .add(bgColorStyle({}))
  .get();

export interface ButtonDropdownContentProps {
  actions?: ActionProps[];
}

const ButtonDropdownContent: FunctionComponent<ButtonDropdownContentProps> = (props: ButtonDropdownContentProps) => (
  <div className={contentStyle}>
    {props.actions?.map((action) => (
      <ButtonDropdownContentItem {...action} />
    ))}
  </div>
);

export default ButtonDropdownContent;
