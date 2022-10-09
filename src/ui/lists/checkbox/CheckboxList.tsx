import { divideColorStyle } from "ui/common/style/CommonStyles";
import { FunctionComponent } from "react";
import CheckboxListItem, {
  CheckboxListItemProps
} from "./item/CheckboxListItem";

interface CheckboxListProps {
  items?: CheckboxListItemProps[];
  left?: boolean;
}

const CheckboxList: FunctionComponent<CheckboxListProps> = (props) => (
  <div className={`w-full divide-y ${divideColorStyle({})}`}>
    {props.items?.map((item) => (
      <CheckboxListItem {...item} left={props.left} />
    ))}
  </div>
);

export default CheckboxList;
