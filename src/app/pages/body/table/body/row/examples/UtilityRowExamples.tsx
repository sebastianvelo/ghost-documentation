import { PrefixSuffixSeparator } from "lib/common/types/Separators";
import { FunctionComponent } from "react";
import Example from "./Example";

const joinPrefixAndSuffix = (prefix: string, suffixes: string[] = []) => {
    try {
        return suffixes.map(suffix => `${prefix}${PrefixSuffixSeparator}${suffix}`);
    } catch (e) {
        console.log(`Error en ${prefix}, ${suffixes}`, e);
        return [];
    }
}

interface UtilityRowExamplesProps {
    suffixes?: string[];
    prefix: string;
    tag?: string;
    text?: string;
    aditionalClassName?: string;
    parentClassName?: string;
    childrenClassName?: string;
    children?: number;
    siblingsClassName?: string;
    nextSiblings?: number;
    prevSiblings?: number;
}

const UtilityRowExamples: FunctionComponent<UtilityRowExamplesProps> = (props: UtilityRowExamplesProps) => (
    <div className="bg_255-255-255-85 p_16px d_grid cols_3 gap_4 place-items_stretch max-h_700px overflow-y_scroll">
        {joinPrefixAndSuffix(props.prefix, props.suffixes).map((className) =>
            <Example className={className} {...props} />
        )}
    </div>
);

export default UtilityRowExamples;