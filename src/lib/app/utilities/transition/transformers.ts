import { SuffixSeparator } from "../../../common/types/Separators";
import { TransitionPropertyMap, TransitionTimingFunctionMap } from "./suffixes";

export const TransitionMsTransformer = (suffix: string) => `${suffix}ms`;

export const TransitionTransformer = (suffix: string) => {
    const [property, duration = "150", ...timingFunction] = suffix.split(SuffixSeparator);
    return `${property} ${TransitionMsTransformer(duration)} ${timingFunction?.join("-") ?? "ease-linear"}`;
}

export const TransitionPropertyTransformer = (suffix: string) => TransitionPropertyMap[suffix] ?? suffix;

const CubicBezierValue = (n: string) => +n / 100;
const CubicBezierValues = (...ns: string[]) => ns.map(CubicBezierValue).join(", ");

export const TransitionTimingFunctionTransformer = (suffix: string) => {
    if (TransitionTimingFunctionMap[suffix]) return TransitionTimingFunctionMap[suffix];
    const [x1, y1, x2, y2] = suffix.split(SuffixSeparator);
    return `cubic-bezier(${CubicBezierValues(x1, y1, x2, y2)})`;
}

