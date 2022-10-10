import { FunctionComponent } from "react";

interface PrefixProps {
    prefix: string;
}

const Prefix: FunctionComponent<PrefixProps> = (props: PrefixProps) => (
    <p className="py_4px txt_215-168-60 txt-weight_bold">
        {props.prefix}
    </p>
);

export default Prefix;