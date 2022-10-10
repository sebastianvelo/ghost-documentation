import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import LengthTransformer from "../common/transformers/common/LengthTransformer";

const MarginUtilities = {
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN, property: PropertyCSS.MARGIN, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN_RIGHT, property: PropertyCSS.MARGIN_RIGHT, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN_LEFT, property: PropertyCSS.MARGIN_LEFT, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN_BOTTOM, property: PropertyCSS.MARGIN_BOTTOM, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN_TOP, property: PropertyCSS.MARGIN_TOP, transformer: LengthTransformer }),
    [GhostPrefix.MARGIN_X]: {
        declarations: [{ property: PropertyCSS.MARGIN_RIGHT, transformer: LengthTransformer }, { property: PropertyCSS.MARGIN_LEFT, transformer: LengthTransformer }]
    },
    [GhostPrefix.MARGIN_Y]: {
        declarations: [{ property: PropertyCSS.MARGIN_TOP, transformer: LengthTransformer }, { property: PropertyCSS.MARGIN_BOTTOM, transformer: LengthTransformer }]
    },
};

export default MarginUtilities;