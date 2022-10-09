import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import Notification from "ui/atomic/badge/notification/Notification";
import Title from "ui/atomic/title/Title";
import ParentProps from "ui/common/props/ParentProps";
import {
  bgColorStyle,
  borderColorStyle
} from "ui/common/style/CommonStyles";
import FeedbackType from "ui/common/types/feedback/FeedbackType";

const messageStyle = (props: MessageProps) =>
  TailwindStyle.builder()
    .add("flex space-x-2 px-2 py-4 w-full rounded-sm  shadow-xl")
    .addIf(bgColorStyle(props), !props.quiet)
    .addIf(bgColorStyle({ color: "light" }), props.quiet)
    .addIf(`border-l-4 ${borderColorStyle(props)}`, props.quiet)
    .get();

export interface MessageProps extends ParentProps {
  color?: FeedbackType;
  quiet?: boolean;
}

const Message: FunctionComponent<MessageProps> = (props: MessageProps) => (
  <div className={messageStyle(props)}>
    <Notification type={props.color ?? "info"} quiet={!props.quiet} />
    <Title children={props.children} />
  </div>
);

export default Message;
