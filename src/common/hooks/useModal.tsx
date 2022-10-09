import { ModalProps } from "ui/components/modal/modal/Modal";
import ModalWrapper from "ui/components/modal/ModalWrapper";
import useToggle from "./useToggle";

const useModal = (props: ModalProps): [JSX.Element, () => void] => {
  const [isOpen, toggle] = useToggle(false);

  return [
    <ModalWrapper isOpen={isOpen} toggle={toggle} modal={props} />,
    toggle
  ];
};

export default useModal;
