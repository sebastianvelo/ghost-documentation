import Utility from "lib/utility/Utility";
import { FunctionComponent } from "react";
import UtilityRow from "./row/UtilityRow";

interface CheatsheetTableBodyProps {
    utilities: {
        [x: string]: Utility;
    };
}

const CheatsheetTableBody: FunctionComponent<CheatsheetTableBodyProps> = (props: CheatsheetTableBodyProps) =>
    <>
        {Object.entries(props.utilities).map(([prefix, utility], i) =>
            <UtilityRow prefix={prefix} utility={utility} i={i} />
        )}
    </>

export default CheatsheetTableBody;