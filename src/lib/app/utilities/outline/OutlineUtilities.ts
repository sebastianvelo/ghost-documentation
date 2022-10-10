import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import ColorTransformer from "../common/transformers/color/ColorTransformer";
import LengthTransformer from "../common/transformers/common/LengthTransformer";
import { OutlineTransformer } from "./transformers";

const OutlineUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.OUTLINE,
        property: PropertyCSS.OUTLINE,
        transformer: OutlineTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.OUTLINE_COLOR,
        property: PropertyCSS.OUTLINE_COLOR,
        transformer: ColorTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.OUTLINE_OFFSET,
        property: PropertyCSS.OUTLINE_OFFSET,
        transformer: LengthTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.OUTLINE_STYLE,
        property: PropertyCSS.OUTLINE_STYLE
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.OUTLINE_WIDTH,
        property: PropertyCSS.OUTLINE_WIDTH,
        transformer: LengthTransformer
    }),
};

export default OutlineUtilities;