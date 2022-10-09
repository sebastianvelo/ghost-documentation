import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import ColorProps from "ui/common/props/ColorProps";
import ParentProps from "ui/common/props/ParentProps";
import SizeProps from "ui/common/props/SizeProps";
import { textColorStyle, textSizeStyle } from "ui/common/style/CommonStyles";

const textStyle = (props: TextProps) =>
  TailwindStyle.builder()
    .add("text-justify")
    .add(textSizeStyle(props))
    .add(textColorStyle(props))
    .get();

export interface TextProps extends ParentProps, ColorProps, SizeProps {}

const Text: FunctionComponent<TextProps> = (props: TextProps) => (
  <p className={textStyle(props)}>{props.children}</p>
);

export default Text;
