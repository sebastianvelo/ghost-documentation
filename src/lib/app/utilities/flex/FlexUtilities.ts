import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import IUtilities from "../IUtilities";
import SimpleUtility from "../common/helpers/SimpleUtility";
import { FlexBasisTransformer, FlexDirectionTransformer } from "./transformers";

const FlexUtilities: IUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.FLEX_BASIS,
        property: PropertyCSS.FLEX_BASIS,
        transformer: FlexBasisTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FLEX_DIRECTION,
        property: PropertyCSS.FLEX_DIRECTION,
        transformer: FlexDirectionTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FLEX_WRAP,
        property: PropertyCSS.FLEX_WRAP
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FLEX_GROW,
        property: PropertyCSS.FLEX_GROW
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FLEX_SHRINK,
        property: PropertyCSS.FLEX_SHRINK
    }),
};

export default FlexUtilities;