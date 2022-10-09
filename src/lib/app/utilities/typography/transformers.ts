import { SuffixSeparator } from "../../../common/types/Separators";
import ColorTransformer from "../common/transformers/color/ColorTransformer";
import { LetterSpacingMap, LineHeightMap } from "./suffixes";

const UnitPxTransformer = (suffix: string) => `${suffix}px`;

export const LetterSpacingTransformer = (suffix: string) => LetterSpacingMap[suffix] ?? suffix;

export const LineHeightTransformer = (suffix: string) => LineHeightMap[suffix] ?? suffix;

export const TextDecorationThicknessTransformer = UnitPxTransformer;

export const TextDecorationTransformer = (suffix: string) => {
    const [line, color = "black", style = "solid", thickness = "1"] = suffix.split(SuffixSeparator);
    return `${line} ${ColorTransformer(color)} ${style} ${TextDecorationThicknessTransformer(thickness)}`;
};

export const TextShadowTransformer = (suffix: string) => {
    const [hShadow, vShadow, blurRadius = "0", color = "black"] = suffix.split(SuffixSeparator);
    return `${UnitPxTransformer(hShadow)} ${UnitPxTransformer(vShadow)} ${UnitPxTransformer(blurRadius)} ${ColorTransformer(color)}`;
};