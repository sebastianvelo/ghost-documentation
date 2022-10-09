import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ColorProps from "ui/common/props/ColorProps";
import { bgColorStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

const dotStyle = (props: DotProps) =>
  TailwindStyle.builder()
    .add("h-3 w-3 rounded-full")
    .add(bgColorStyle(props))
    .get();

interface DotProps extends ColorProps {}

const Dot: FunctionComponent<DotProps> = (props: DotProps) => (
  <div className={dotStyle(props)}></div>
);

export default Dot;
