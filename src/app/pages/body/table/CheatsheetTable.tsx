import Utility from "lib/utility/Utility";
import { FunctionComponent } from "react";
import UtilityRow from "./UtilityRow";

interface CheatsheetTableProps {
    category: {
        name: string;
        body: {
            utilities: {
                [x: string]: Utility;
            };
        };
    };
}

const CheatsheetTable: FunctionComponent<CheatsheetTableProps> = (props: CheatsheetTableProps) => (
    <section className="col-span_4 px_16px overflow-y_scroll">
        <h2 className="mt_0">{props.category.name}</h2>
        <div>
            <div className="px_16px d_grid cols_6 txt-weight_bold bg_primary">
                <p>Properties</p>
                <p>Prefix</p>
                <p className="col-span_2">Suffixes</p>
                <p className="col-span_2">Example</p>
            </div>
            {Object.entries(props.category.body.utilities).map(([prefix, utility], i) =>
                <UtilityRow prefix={prefix} utility={utility} i={i} />
            )}
        </div>
    </section>
);

export default CheatsheetTable;