import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import LengthTransformer from "../common/transformers/common/LengthTransformer";

const SpaceUtilities = {
    [GhostPrefix.SPACE_X]: {
        declarations: [{ property: PropertyCSS.MARGIN_LEFT, transformer: LengthTransformer }],
        selector: (className: string) => `${className} > * + *`
    },
    [GhostPrefix.SPACE_Y]: {
        declarations: [{ property: PropertyCSS.MARGIN_TOP, transformer: LengthTransformer }],
        selector: (className: string) => `${className} > * + *`
    },
};

export default SpaceUtilities;