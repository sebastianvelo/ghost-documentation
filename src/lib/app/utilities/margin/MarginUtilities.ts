import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";

const MarginUtilities = {
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN, property: PropertyCSS.MARGIN }),
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN_RIGHT, property: PropertyCSS.MARGIN_RIGHT }),
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN_LEFT, property: PropertyCSS.MARGIN_LEFT }),
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN_BOTTOM, property: PropertyCSS.MARGIN_BOTTOM }),
    ...SimpleUtility({ prefix: GhostPrefix.MARGIN_TOP, property: PropertyCSS.MARGIN_TOP }),
    [GhostPrefix.MARGIN_X]: {
        declarations: [{ property: PropertyCSS.MARGIN_RIGHT }, { property: PropertyCSS.MARGIN_LEFT }]
    },
    [GhostPrefix.MARGIN_Y]: {
        declarations: [{ property: PropertyCSS.MARGIN_TOP }, { property: PropertyCSS.MARGIN_BOTTOM }]
    },
};

export default MarginUtilities;