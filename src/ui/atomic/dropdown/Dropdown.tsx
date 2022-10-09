import useToggle from "common/hooks/useToggle";
import StyleableProps from "ui/common/props/StyleableProps";
import { FunctionComponent } from "react";

interface DropdownProps extends StyleableProps {
  trigger?: React.ReactNode | React.ReactNode[];
  content?: React.ReactNode | React.ReactNode[];
}

const Dropdown: FunctionComponent<DropdownProps> = (props: DropdownProps) => {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <div className={`${props.className} relative w-max`}>
      <div className={`w-full cursor-pointer`} onClick={toggleOpen}>
        {props.trigger}
      </div>
      {isOpen && props.content}
    </div>
  );
};

export default Dropdown;
