import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import RoundableProps from "ui/common/props/RoundeableProps";
import { roundedStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";

const imageStyle = (props: ImageProps) =>
  TailwindStyle.builder().add(props.className).add(roundedStyle(props)).get();

export interface ImageProps
  extends React.DetailedHTMLProps<
      React.ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    >,
    RoundableProps {}

const Image: FunctionComponent<ImageProps> = (props: ImageProps) => (
  <img {...props} className={imageStyle(props)} />
);

export default Image;
