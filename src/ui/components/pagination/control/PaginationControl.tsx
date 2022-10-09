import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "ui/atomic/button/ActionButton";
import ColorProps from "ui/common/props/ColorProps";
import { FunctionComponent } from "react";

interface PaginationControlProps extends ColorProps {
  right?: boolean;
  changePage?: () => void;
  disabled?: boolean;
}

const PaginationControl: FunctionComponent<PaginationControlProps> = (
  props: PaginationControlProps
) => (
  <ActionButton
    quiet
    color={props.color}
    onClick={props.changePage}
    disabled={props.disabled}
    children={
      <FontAwesomeIcon
        icon={props.right ? faChevronRight : faChevronLeft}
        className={`w-3 h-3`}
      />
    }
  />
);

export default PaginationControl;
