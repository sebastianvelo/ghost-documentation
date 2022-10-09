import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";

const SizingUtilities = {
    ...SimpleUtility({ prefix: GhostPrefix.WIDTH, property: PropertyCSS.WIDTH }),
    ...SimpleUtility({ prefix: GhostPrefix.HEIGHT, property: PropertyCSS.HEIGHT }),
    ...SimpleUtility({ prefix: GhostPrefix.MIN_WIDTH, property: PropertyCSS.MIN_WIDTH }),
    ...SimpleUtility({ prefix: GhostPrefix.MIN_HEIGHT, property: PropertyCSS.MIN_HEIGHT }),
    ...SimpleUtility({ prefix: GhostPrefix.MAX_WIDTH, property: PropertyCSS.MAX_WIDTH }),
    ...SimpleUtility({ prefix: GhostPrefix.MAX_HEIGHT, property: PropertyCSS.MAX_HEIGHT }),
};

export default SizingUtilities;