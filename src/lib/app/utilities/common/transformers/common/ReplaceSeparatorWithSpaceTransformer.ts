import { SuffixSeparator } from "../../../../../common/types/Separators";

const ReplaceSeparatorWithSpaceTransformer =
    (suffix: string) => suffix.split(SuffixSeparator).join(" ");

export default ReplaceSeparatorWithSpaceTransformer;