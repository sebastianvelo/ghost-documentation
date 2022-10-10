import Utility from "lib/utility/Utility";
import { FunctionComponent } from "react";
import Property from "./common/Property";
import Example from "./example/Example";
import Prefix from "./prefix/Prefix";
import Suffixes from "./suffixes/Suffixes";

const rowColor = {
    "false": "bg_0-0-0-100",
    "true": "bg_0-0-0-85",
};

const getRowColor = (condition: boolean) => rowColor[`${condition}`];

interface UtilityRowProps {
    prefix: string;
    utility: Utility;
    i: number
}

const UtilityRow: FunctionComponent<UtilityRowProps> = (props: UtilityRowProps) => {
    const color = getRowColor(props.i % 2 === 0);
    return (
        <details>
            <summary className={`d_grid align-items_center cols_6 px_16px ${color} txt-size_13px`}>
                <Property>{props.utility.declarations.map(d => d.property).join(",")}</Property>
                <Prefix {...props} />
                <Suffixes {...props} />
                <Example  {...props} />
            </summary>
            <div>
                asdasdasd
            </div>
        </details>
    );
}

export default UtilityRow;