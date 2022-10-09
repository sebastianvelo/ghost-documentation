import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import ColorProps from "ui/common/props/ColorProps";
import ParentProps from "ui/common/props/ParentProps";
import { bgColorStyle } from "ui/common/style/CommonStyles";

const pillStyle = (props: PillProps) =>
  TailwindStyle.builder()
    .add("rounded-xl text-center px-3 font-bold")
    .add(bgColorStyle(props))
    .get();

interface PillProps extends ColorProps, ParentProps {}

const Pill: FunctionComponent<PillProps> = (props: PillProps) => (
  <div className={pillStyle(props)}>{props.children}</div>
);

export default Pill;
