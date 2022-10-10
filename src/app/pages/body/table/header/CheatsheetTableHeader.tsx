import { FunctionComponent } from "react";

const CheatsheetTableHeader: FunctionComponent = () => (
    <div className="px_16px d_grid cols_6 txt-weight_bold bg_primary">
        <p>Properties</p>
        <p>Prefix</p>
        <p className="col-span_2">Suffixes</p>
        <p className="col-span_2">Example</p>
    </div>
);

export default CheatsheetTableHeader;