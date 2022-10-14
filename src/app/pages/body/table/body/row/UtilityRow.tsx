import CheatsheetExamples from "app/data/cheatsheet/examples/CheatsheetExamples";
import CheatsheetExamplesData from "app/data/cheatsheet/examples/CheatsheetExamplesData";
import Utility from "lib/utility/Utility";
import { FunctionComponent } from "react";
import UtilityRowExamples from "./examples/UtilityRowExamples";
import UtilityRowToggler from "./toggler/UtilityRowToggler";

interface UtilityRowProps {
    prefix: string;
    utility: Utility;
    i: number
}

const UtilityRow: FunctionComponent<UtilityRowProps> = (props: UtilityRowProps) => (
    <details>
        <UtilityRowToggler {...props} />
        <UtilityRowExamples
            prefix={props.prefix}
            suffixes={CheatsheetExamples[props.prefix]}
            {...CheatsheetExamplesData[props.prefix]}
        />
    </details>
);

export default UtilityRow;