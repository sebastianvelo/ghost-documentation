import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ColorProps from "ui/common/props/ColorProps";
import ParentProps from "ui/common/props/ParentProps";
import StyleableProps from "ui/common/props/StyleableProps";
import {
  textColorHoverableStyle,
  textColorStyle
} from "ui/common/style/CommonStyles";

const linkStyle = (props: ActionLinkProps) =>
  TailwindStyle.builder()
    .add(textColorStyle(props))
    .add(textColorHoverableStyle(props))
    .get();

export interface ActionLinkProps
  extends StyleableProps,
    ColorProps,
    ParentProps {
  route?: string;
}

const ActionLink: FunctionComponent<ActionLinkProps> = (
  props: ActionLinkProps
) => (
  <Link to={props.route ?? ""} className={linkStyle(props)}>
    {props.children}
  </Link>
);

export default ActionLink;
