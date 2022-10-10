import { SuffixSeparator } from "../../../common/types/Separators";
import ColorTransformer from "../common/transformers/color/ColorTransformer";
import LengthTransformer from "../common/transformers/common/LengthTransformer";

export const OutlineTransformer = (suffix: string) => {
    const [width = "1", color = "black", style = "solid"] = suffix.split(SuffixSeparator);
    return `${LengthTransformer(width)} ${style} ${ColorTransformer(color)}`;
};
