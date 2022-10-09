import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import ParentProps from "ui/common/props/ParentProps";
import CheckboxLabel, {
  CheckboxLabelProps
} from "ui/atomic/checkbox/CheckboxLabel";
import { bgColorHoverableStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";
import Row from "../../../layout/row/Row";

const itemStyle = TailwindStyle.builder()
  .add("items-center cursor-pointer justify-between h-10 px-2")
  .add(bgColorHoverableStyle({}))
  .get();

export interface CheckboxListItemProps extends ParentProps {
  checkbox?: CheckboxLabelProps;
  left?: boolean;
}

const CheckboxListItem: FunctionComponent<CheckboxListItemProps> = (
  props: CheckboxListItemProps
) => (
  <Row reverse={!props.left} className={itemStyle}>
    <CheckboxLabel {...props.checkbox} />
    {props.children}
  </Row>
);

export default CheckboxListItem;
