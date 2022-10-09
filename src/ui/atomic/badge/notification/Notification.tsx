import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import Size from "ui/common/types/size/Size";
import FeedbackType from "ui/common/types/feedback/FeedbackType";
import { textColorStyle, textSizeStyle } from "ui/common/style/CommonStyles";

const getIcon = (props: NotificationProps) => {
  switch (props.type) {
    case "success":
      return faCircleCheck;
    case "info":
      return faCircleInfo;
    case "danger":
    case "warning":
    default:
      return faCircleExclamation;
  }
};

const notificationStyle = (props: NotificationProps) =>
  TailwindStyle.builder()
    .add(textSizeStyle(props))
    .addIf(textColorStyle({ color: props.type }), !props.quiet)
    .get();

interface NotificationProps {
  type: FeedbackType;
  size?: Size;
  quiet?: boolean;
}

const Notification: FunctionComponent<NotificationProps> = (
  props: NotificationProps
) => (
  <span className={notificationStyle(props)}>
    <FontAwesomeIcon icon={getIcon(props)} />
  </span>
);

export default Notification;
