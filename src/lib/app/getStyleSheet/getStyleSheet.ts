import { OptionsSeparator, PrefixSuffixSeparator } from "../../common/types/Separators";
import utilities from "../utilities/Utilities";
import Declaration from "./types/Declaration";
import { getDeclarationsFromUtility } from "./utils/declarations";
import { getSelectorFromClassName } from "./utils/selector";
import { insertRuleAndDeclarationBlock } from "./utils/styleSheet";

const getSelectorAndDeclarationsFromGhostClassName = (className: string) => {
    const [prefixSuffix, ...options] = className.split(OptionsSeparator) as [string, string?, string?, string?];
    const [prefix, suffix] = prefixSuffix.split(PrefixSuffixSeparator);
    const utility = utilities[prefix];

    const selector: string = getSelectorFromClassName(prefixSuffix, options, utility.selector);
    const declarations: Declaration[] = getDeclarationsFromUtility(utility, suffix);
    return {
        selector,
        declarations
    }
};

const getStyleSheet = (classNames: string[]): void => {
    const element = document.createElement("style");
    document.head.append(element);

    classNames.map(getSelectorAndDeclarationsFromGhostClassName).forEach(utility => {
        insertRuleAndDeclarationBlock(utility.selector, utility.declarations, element)
    });
};

export default getStyleSheet;