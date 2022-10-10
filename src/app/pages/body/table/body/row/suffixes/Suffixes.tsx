import CheatsheetSuffixes from "app/data/CheatsheetSuffixes";
import { FunctionComponent } from "react";

interface SuffixesProps {
    prefix: string;
}

const Suffixes: FunctionComponent<SuffixesProps> = (props: SuffixesProps) => {
    const suffixes = CheatsheetSuffixes[props.prefix];
    return (
        <p className="py_4px txt_white txt-weight_bold col-span_2 pr_32px">
            {`{`} {suffixes.join(" | ")} {`}`}
        </p>
    );
};

export default Suffixes;