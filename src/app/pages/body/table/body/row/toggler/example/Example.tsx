import CheatsheetTableColumnExamples from "app/data/CheatsheetTableColumnExamples";
import GhostDeclaration from "lib/utility/GhostDeclaration";
import Utility from "lib/utility/Utility";
import { FunctionComponent } from "react";
import Property from "../../common/Property";
import Value from "../../common/Value";

const getValueExample = (example: string, declaration: GhostDeclaration) =>
    declaration.transformer ? declaration.transformer(example) : example;

interface ExampleProps {
    prefix: string;
    utility: Utility;
}

const Example: FunctionComponent<ExampleProps> = (props: ExampleProps) => {
    const example = CheatsheetTableColumnExamples[props.prefix];
    
    return (
        <pre className="py_4px txt_white txt-weight_bold col-span_2">
            <span className="txt_215-168-60 txt-weight_bold">.{props.prefix}_{example}</span>
            {` {`}
            <br />
            {props.utility.declarations.map(declaration => (
                <pre>
                    &emsp;&emsp; <Property>{declaration.property}</Property>:
                    {getValueExample(example, declaration)?.split(" ").map(value => <Value value={value} />)};
                </pre>
            ))}
            {`}`}
        </pre>
    );
}

export default Example;