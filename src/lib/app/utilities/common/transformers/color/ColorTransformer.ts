import { SuffixSeparator } from "../../../../../common/types/Separators";
import { getValue } from "../../../../../config/CustomColors";
import SuffixTransformer from "../../../../../utility/types/SuffixTransformer";

const getRGBA = (suffix: string[]) => {
  const [r, g, b, a = 100] = suffix;
  const alpha = (+a / 100);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ColorTransformer: SuffixTransformer = (suffix: string) => {
  const splitted = suffix.split(SuffixSeparator);
  const possibleAlias = splitted[0] && getValue(splitted[0]);
  if (possibleAlias) return ColorTransformer(possibleAlias);
  if (splitted.length === 1) {
    const [value] = splitted;
    const realValue = getValue(value) ?? value;
    const hexa = parseInt(realValue, 16);
    if (!Number.isNaN(hexa) && (realValue.length === 6 || realValue.length === 3)) return `#${realValue}`;
    return realValue;
  }
  return getRGBA(splitted);
};

export default ColorTransformer;
