import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";

const SpaceUtilities = {
    [GhostPrefix.SPACE_X]: {
        declarations: [{ property: PropertyCSS.MARGIN_LEFT }],
        selector: (className: string) => `${className} > * + *`
    },
    [GhostPrefix.SPACE_Y]: {
        declarations: [{ property: PropertyCSS.MARGIN_TOP },],
        selector: (className: string) => `${className} > * + *`
    },
};

export default SpaceUtilities;