import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";
import Modal, { ModalProps } from "./modal/Modal";

const modalWrapper = (isOpen: boolean) =>
  TailwindStyle.builder()
    .add(
      `fixed w-screen h-screen flex flex-col items-center justify-center z-50 top-0 left-0`
    )
    .addIf(`hidden`, !isOpen)
    .addIf(`bg-dark bg-opacity-80`, isOpen)
    .get();

interface ModalWrapperProps {
  isOpen: boolean;
  toggle: () => void;
  modal: ModalProps;
}

const ModalWrapper: FunctionComponent<ModalWrapperProps> = (
  props: ModalWrapperProps
) => (
  <div className={modalWrapper(props.isOpen)}>
    <Modal {...props.modal} toggle={props.toggle} />
  </div>
);

export default ModalWrapper;
