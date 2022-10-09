import {
  faChevronRight,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ActionButton, {
  ActionButtonProps
} from "ui/atomic/button/ActionButton";
import { FunctionComponent } from "react";

const dropdownTriggerStyle = TailwindStyle.builder()
  .add("flex justify-center items-center space-x-1")
  .get();

interface ButtonDropdownTriggerProps extends ActionButtonProps {
  toggle: () => void;
  isOpen: boolean;
}

const ButtonDropdownTrigger: FunctionComponent<ButtonDropdownTriggerProps> = (
  props: ButtonDropdownTriggerProps
) => (
  <ActionButton
    {...props}
    onClick={props.toggle}
    className={dropdownTriggerStyle}
  >
    <div>{props.children}</div>
    <FontAwesomeIcon
      icon={props.isOpen ? faChevronDown : faChevronRight}
      className={"w-3 h-3"}
    />
  </ActionButton>
);

export default ButtonDropdownTrigger;
