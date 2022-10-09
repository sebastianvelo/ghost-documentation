import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import {
  bgColorStyle,
  borderColorStyle
} from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";
import Card, { CardProps } from "../../card/Card";
import CloseButton from "./close/CloseButton";

const modalStyle = () =>
  TailwindStyle.builder()
    .add("w-1/2 h-96 border px-8 py-4 rounded-md relative")
    .add(borderColorStyle({}))
    .add(bgColorStyle({}))
    .get();

export interface ModalProps extends CardProps {
  toggle?: () => void;
}

const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => (
  <div className={modalStyle()}>
    <CloseButton {...props} />
    <Card {...props} />
  </div>
);

export default Modal;
