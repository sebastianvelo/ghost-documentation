import useToggle from "common/hooks/useToggle";
import { ActionButtonProps } from "ui/atomic/button/ActionButton";
import { FunctionComponent } from "react";
import Dropdown from "../../atomic/dropdown/Dropdown";
import ButtonDropdownContent, {
  ButtonDropdownContentProps
} from "./content/ButtonDropdownContent";
import ButtonDropdownTrigger from "./trigger/ButtonDropdownTrigger";

interface ButtonDropdownProps
  extends ActionButtonProps,
    ButtonDropdownContentProps {}

const ButtonDropdown: FunctionComponent<ButtonDropdownProps> = (
  props: ButtonDropdownProps
) => {
  const [isOpen, toggleOpen] = useToggle();
  return (
    <Dropdown
      trigger={
        <ButtonDropdownTrigger {...props} toggle={toggleOpen} isOpen={isOpen} />
      }
      children={<ButtonDropdownContent {...props} />}
    />
  );
};

export default ButtonDropdown;
