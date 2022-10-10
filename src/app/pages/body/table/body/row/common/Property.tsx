import { FunctionComponent } from "react";

interface PropertyProps {
    children: string;
}

const Property: FunctionComponent<PropertyProps> = (props: PropertyProps) => (
    <span className="py_4px txt_91-203-254 txt-weight_bold">
        {props.children}
    </span>
);

export default Property;