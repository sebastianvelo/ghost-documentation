import { FunctionComponent } from "react";
import ActionAnchor, {
  ActionAnchorProps
} from "../../atomic/anchor/ActionAnchor";
import ActionButton, {
  ActionButtonProps
} from "../../atomic/button/ActionButton";
import ActionLink, { ActionLinkProps } from "../../atomic/link/ActionLink";

const getComponent = (props: ActionProps) => {
  switch (props.type) {
    case "button":
      return <ActionButton {...props} />;
    case "anchor":
      return <ActionLink {...props} />;
    case "link":
    default:
      return <ActionAnchor {...props} />;
  }
};

export interface ActionProps
  extends ActionLinkProps,
    ActionAnchorProps,
    ActionButtonProps {
  type?: "button" | "anchor" | "link";
}

const Action: FunctionComponent<ActionProps> = (props: ActionProps) =>
  getComponent(props);

export default Action;
