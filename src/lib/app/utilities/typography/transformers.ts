import { SuffixSeparator } from "../../../common/types/Separators";
import ColorTransformer from "../common/transformers/color/ColorTransformer";
import LengthTransformer from "../common/transformers/common/LengthTransformer";
import { LetterSpacingMap, LineHeightMap } from "./suffixes";

export const LetterSpacingTransformer = (suffix: string) => LetterSpacingMap[suffix] ?? suffix;

export const LineHeightTransformer = (suffix: string) => LineHeightMap[suffix] ?? suffix;


export const TextDecorationTransformer = (suffix: string) => {
    const [line, color = "black", style = "solid", thickness = "1"] = suffix.split(SuffixSeparator);
    return `${line} ${ColorTransformer(color)} ${style} ${LengthTransformer(thickness)}`;
};

export const TextShadowTransformer = (suffix: string) => {
    const [hShadow, vShadow, blurRadius = "0", color = "black"] = suffix.split(SuffixSeparator);
    return `${LengthTransformer(hShadow)} ${LengthTransformer(vShadow)} ${LengthTransformer(blurRadius)} ${ColorTransformer(color)}`;
};