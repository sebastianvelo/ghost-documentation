import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ColorProps from "ui/common/props/ColorProps";
import SizeProps from "ui/common/props/SizeProps";
import StyleableProps from "ui/common/props/StyleableProps";
import { textColorStyle, textSizeStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";
import ParentProps from "ui/common/props/ParentProps";

const titleStyle = (props: TitleProps) =>
  TailwindStyle.builder()
    .add("font-bold")
    .add(props.className)
    .add(textSizeStyle(props))
    .add(textColorStyle(props))
    .get();

export interface TitleProps extends ParentProps, ColorProps, SizeProps, StyleableProps {}

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => (
  <h1 className={titleStyle(props)}>{props.children}</h1>
);

export default Title;
