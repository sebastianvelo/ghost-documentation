import Headline from "app/common/Headline";
import Utility from "lib/utility/Utility";
import { FunctionComponent } from "react";
import CheatsheetTableBody from "./body/CheatsheetTableBody";
import CheatsheetTableHeader from "./header/CheatsheetTableHeader";

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
    <section className="col-span_5 px_6px overflow-y_scroll">
        <Headline>{props.category.name}</Headline>
        <div>
            <CheatsheetTableHeader />
            <CheatsheetTableBody utilities={props.category.body.utilities} />
        </div>
    </section>
);

export default CheatsheetTable;