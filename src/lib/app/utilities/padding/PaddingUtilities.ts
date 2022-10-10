import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import LengthTransformer from "../common/transformers/common/LengthTransformer";

const PaddingUtilities = {
    ...SimpleUtility({ prefix: GhostPrefix.PADDING, property: PropertyCSS.PADDING, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.PADDING_RIGHT, property: PropertyCSS.PADDING_RIGHT, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.PADDING_LEFT, property: PropertyCSS.PADDING_LEFT, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.PADDING_BOTTOM, property: PropertyCSS.PADDING_BOTTOM, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.PADDING_TOP, property: PropertyCSS.PADDING_TOP, transformer: LengthTransformer }),
    [GhostPrefix.PADDING_X]: {
        declarations: [
            { property: PropertyCSS.PADDING_RIGHT, transformer: LengthTransformer },
            { property: PropertyCSS.PADDING_LEFT, transformer: LengthTransformer }
        ]
    },
    [GhostPrefix.PADDING_Y]: {
        declarations: [
            { property: PropertyCSS.PADDING_TOP, transformer: LengthTransformer },
            { property: PropertyCSS.PADDING_BOTTOM, transformer: LengthTransformer }
        ]
    },
};

export default PaddingUtilities;