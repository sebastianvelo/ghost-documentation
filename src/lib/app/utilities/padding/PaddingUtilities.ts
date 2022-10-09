import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";

const PaddingUtilities = {
    ...SimpleUtility({ prefix: GhostPrefix.PADDING, property: PropertyCSS.PADDING }),
    ...SimpleUtility({ prefix: GhostPrefix.PADDING_RIGHT, property: PropertyCSS.PADDING_RIGHT }),
    ...SimpleUtility({ prefix: GhostPrefix.PADDING_LEFT, property: PropertyCSS.PADDING_LEFT }),
    ...SimpleUtility({ prefix: GhostPrefix.PADDING_BOTTOM, property: PropertyCSS.PADDING_BOTTOM }),
    ...SimpleUtility({ prefix: GhostPrefix.PADDING_TOP, property: PropertyCSS.PADDING_TOP }),
    [GhostPrefix.PADDING_X]: {
        declarations: [{ property: PropertyCSS.PADDING_RIGHT }, { property: PropertyCSS.PADDING_LEFT }]
    },
    [GhostPrefix.PADDING_Y]: {
        declarations: [{ property: PropertyCSS.PADDING_TOP }, { property: PropertyCSS.PADDING_BOTTOM }]
    },
};

export default PaddingUtilities;