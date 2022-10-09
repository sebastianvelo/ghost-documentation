import CheatsheetExamples from "app/data/CheatsheetExamples";
import CheatsheetSuffixes from "app/data/CheatsheetSuffixes";
import GhostDeclaration from "lib/utility/GhostDeclaration";
import Utility from "lib/utility/Utility";
import { FunctionComponent } from "react";

const rowColor = {
    "false": "bg_0-0-0-100",
    "true": "bg_0-0-0-85",
};

const getRowColor = (condition: boolean) => rowColor[`${condition}`];

const getValueExample = (example: string, declaration: GhostDeclaration) =>
    declaration.transformer ? declaration.transformer(example) : example;

interface UtilityRowProps {
    prefix: string;
    utility: Utility;
    i: number
}

const UtilityRow: FunctionComponent<UtilityRowProps> = (props: UtilityRowProps) => {
    const suffixes = CheatsheetSuffixes[props.prefix];
    const example = CheatsheetExamples[props.prefix];
    const color = getRowColor(props.i % 2 === 0);
    return (
        <div className={`d_grid align-items_center cols_6 px_16px ${color} txt-size_12px`}>
            <p className="py_4px txt_91-203-254 txt-weight_bold">
                {props.utility.declarations.map(d => d.property)}
            </p>
            <p className="py_4px txt_215-168-60 txt-weight_bold">
                {props.prefix}
            </p>
            <p className="py_4px txt_white txt-weight_bold col-span_2 pr_32px">
                {`{`} {suffixes.join(" | ")} {`}`}
            </p>
            <pre className="py_4px txt_white txt-weight_bold col-span_2">
                <span className="txt_215-168-60 txt-weight_bold">.{props.prefix}_{example}</span>
                {` { `}
                <br />
                {props.utility.declarations.map(declaration => (
                    <pre>
                        &emsp;&emsp; <span className="txt_91-203-254">{declaration.property}</span>:&nbsp;
                        <span>{getValueExample(example, declaration)};</span>
                    </pre>
                ))}
                {` } `}
            </pre>
        </div>
    );
}

export default UtilityRow;