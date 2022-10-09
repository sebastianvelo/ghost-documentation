import Action, { ActionProps } from "ui/components/action/Action";
import StyleableProps from "ui/common/props/StyleableProps";
import { FunctionComponent } from "react";

export interface ActionListProps extends StyleableProps {
  actions?: ActionProps[];
}

const ActionList: FunctionComponent<ActionListProps> = (props: ActionListProps) => (
  <div className={props.className}>
    {props.actions?.map((action) => (
      <Action {...action} />
    ))}
  </div>
);

export default ActionList;
