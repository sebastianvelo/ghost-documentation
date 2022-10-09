import useToggle from "common/hooks/useToggle";
import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { transitionStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";
import Message, { MessageProps } from "../message/Message";
import CloseButton from "./close/CloseButton";

const snackbarStyle = (props: SnackbarProps) =>
  TailwindStyle.builder()
    .add(transitionStyle())
    .add("fixed flex w-full bottom-12 left-0 px-32 z-50 animate-up")
    .addIf("opacity-0", !props.open)
    .addIf("opacity-100", props.open)
    .get();

interface SnackbarProps extends MessageProps {
  open?: boolean;
  onClose?: () => void;
}

const Snackbar: FunctionComponent<SnackbarProps> = (props: SnackbarProps) => {
  const [open, toggleOpen] = useToggle(props.open);
  const onClose = () => {
    if (props.onClose) 
      props.onClose();
    toggleOpen();
  };
  return (
    <div className={snackbarStyle({ open })}>
      <Message {...props} />
      <CloseButton onClose={onClose} {...props} />
    </div>
  );
};

export default Snackbar;
