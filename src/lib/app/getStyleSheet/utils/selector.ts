import SelectorTransformer from "../../../utility/types/SelectorTransformer";

const PseudoClassMap: any = {
    even: "nth-child(even)",
    odd: "nth-child(odd)",
    first: "first-child",
    last: "last-child"
};

const scapeCharacters = (prefix: string) => ["%", "."].reduce((acc, val) => acc.replace(val, `\\${val}`), prefix);

const getPseudoClass = (pseudoClass: string) => PseudoClassMap[pseudoClass] ?? pseudoClass;

const getSelectors = (options: [string?, string?, string?]) => {
    const [pseudoClass = "", breakpoint = "", theme = ""] = options;
    const themeParentSelector = theme ? `.${theme}` : "";
    const breakpointSelector = breakpoint ? `\\:\\:${breakpoint}` : "";
    const pseudoClassSelector = pseudoClass ? `\\:${pseudoClass}:${getPseudoClass(pseudoClass)}` : "";
    return [pseudoClassSelector, breakpointSelector, themeParentSelector];
}

const getSelector = (prefix: string, options: [string?, string?, string?]) => {
    const [pseudoClass, breakpoint, theme] = getSelectors(options);
    return `${theme} .${prefix}${breakpoint}${pseudoClass}`;
}

export const getSelectorFromClassName =
    (prefixSuffix: string, options: [string?, string?, string?] = [], transformer?: SelectorTransformer): string => {
        const scapedPrefix = scapeCharacters(prefixSuffix);
        const selector = getSelector(scapedPrefix, options);
        return transformer ? transformer(selector) : selector;
    }
