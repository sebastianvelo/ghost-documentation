import Text from "ui/atomic/text/Text";
import Title from "ui/atomic/title/Title";
import { borderColorStyle } from "ui/common/style/CommonStyles";
import ActionList from "ui/lists/actions/ActionList";
import { FunctionComponent } from "react";
import { ActionProps } from "../action/Action";

export interface CardProps {
  header?: string;
  body?: {
    title?: string;
    content?: string;
  };
  footer?: {
    actions?: ActionProps[];
  };
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => (
  <div className={`space-y-4 relative`}>
    <header>
      <Title children={props.header} size="3xl" />
    </header>
    <div className={`space-y-4 overflow-y-scroll h-52`}>
      <Title children={props.body?.title} size="2xl" />
      <Text children={props.body?.content} />
    </div>
    <footer className={`border-t ${borderColorStyle({})} w-full p-2 flex`}>
      <ActionList {...props.footer} />
    </footer>
  </div>
);

export default Card;
