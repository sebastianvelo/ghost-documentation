import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import { BorderTransformer } from "./transformers";

const BorderUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.BORDER,
        property: PropertyCSS.BORDER,
        transformer: BorderTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BORDER_BOTTOM,
        property: PropertyCSS.BORDER_BOTTOM,
        transformer: BorderTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BORDER_TOP,
        property: PropertyCSS.BORDER_TOP,
        transformer: BorderTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BORDER_RIGHT,
        property: PropertyCSS.BORDER_RIGHT,
        transformer: BorderTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.BORDER_LEFT,
        property: PropertyCSS.BORDER_LEFT,
        transformer: BorderTransformer
    }),
    [GhostPrefix.BORDER_X]: {
        declarations: [
            { property: PropertyCSS.BORDER_LEFT, transformer: BorderTransformer },
            { property: PropertyCSS.BORDER_RIGHT, transformer: BorderTransformer }
        ],
    },
    [GhostPrefix.BORDER_Y]: {
        declarations: [
            { property: PropertyCSS.BORDER_TOP, transformer: BorderTransformer },
            { property: PropertyCSS.BORDER_BOTTOM, transformer: BorderTransformer }
        ],
    },
    ...SimpleUtility({
        prefix: GhostPrefix.BORDER_RADIUS,
        property: PropertyCSS.BORDER_RADIUS
    })
};

export default BorderUtilities;