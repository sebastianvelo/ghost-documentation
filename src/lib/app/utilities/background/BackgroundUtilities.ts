import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import ColorTransformer from "../common/transformers/color/ColorTransformer";
import ReplaceSeparatorWithSpaceTransformer from "../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import IUtilities from "../IUtilities";
import { BackgroundPositioningTransformer, BackgroundRepeatTransformer } from "./transformers";

const BackgroundUtilities: IUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.BG_COLOR,
        property: PropertyCSS.BG_COLOR,
        transformer: ColorTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BG_ATTACHMENT,
        property: PropertyCSS.BG_ATTACHMENT,
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BG_BLEND,
        property: PropertyCSS.BG_BLEND,
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BG_CLIP,
        property: PropertyCSS.BG_CLIP,
        transformer: BackgroundPositioningTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BG_ORIGIN,
        property: PropertyCSS.BG_ORIGIN,
        transformer: BackgroundPositioningTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BG_POSITION,
        property: PropertyCSS.BG_POSITION,
        transformer: ReplaceSeparatorWithSpaceTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BG_REPEAT,
        property: PropertyCSS.BG_REPEAT,
        transformer: BackgroundRepeatTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BG_SIZE,
        property: PropertyCSS.BG_SIZE,
    }),
};

export default BackgroundUtilities;