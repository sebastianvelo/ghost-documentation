import Utility from "lib/utility/Utility";
import { FunctionComponent } from "react";
import Property from "../common/Property";
import Example from "./example/Example";
import Prefix from "./prefix/Prefix";
import Suffixes from "./suffixes/Suffixes";

const rowColor = {
    "false": "bg_0-0-0-100",
    "true": "bg_0-0-0-85",
};

const getRowColor = (condition: boolean) => rowColor[`${condition}`];

interface UtilityRowTogglerProps {
    prefix: string;
    utility: Utility;
    i: number;
    isHover?: boolean;
}

const UtilityRowToggler: FunctionComponent<UtilityRowTogglerProps> = (props: UtilityRowTogglerProps) => {
    const color = getRowColor(props.i % 2 === 0);
    const isHover = props.isHover ? "bg_secondary:hover cursor_pointer" : "";
    return (
        <summary className={`d_grid align-items_center cols_6 px_16px txt-size_13px ${color} ${isHover}`}>
            <Property>{props.utility.declarations.map(d => d.property).join(",")}</Property>
            <Prefix {...props} />
            <Suffixes {...props} />
            <Example  {...props} />
        </summary>
    );
}

export default UtilityRowToggler;