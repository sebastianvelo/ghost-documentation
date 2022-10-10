import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import ColorTransformer from "../common/transformers/color/ColorTransformer";

const InteractivityUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.CURSOR,
        property: PropertyCSS.CURSOR
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.CARET_COLOR,
        property: PropertyCSS.CARET_COLOR,
        transformer: ColorTransformer,
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.ACCENT_COLOR,
        property: PropertyCSS.ACCENT_COLOR,
        transformer: ColorTransformer,
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.POINTER_EVENTS,
        property: PropertyCSS.POINTER_EVENTS
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.SCROLL_BEHAVIOR,
        property: PropertyCSS.SCROLL_BEHAVIOR
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.RESIZE,
        property: PropertyCSS.RESIZE
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.USER_SELECT,
        property: PropertyCSS.USER_SELECT
    }),
};

export default InteractivityUtilities;