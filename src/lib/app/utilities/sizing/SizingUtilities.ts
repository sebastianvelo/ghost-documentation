import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import LengthTransformer from "../common/transformers/common/LengthTransformer";

const SizingUtilities = {
    ...SimpleUtility({ prefix: GhostPrefix.WIDTH, property: PropertyCSS.WIDTH, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.HEIGHT, property: PropertyCSS.HEIGHT, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.MIN_WIDTH, property: PropertyCSS.MIN_WIDTH, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.MIN_HEIGHT, property: PropertyCSS.MIN_HEIGHT, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.MAX_WIDTH, property: PropertyCSS.MAX_WIDTH, transformer: LengthTransformer }),
    ...SimpleUtility({ prefix: GhostPrefix.MAX_HEIGHT, property: PropertyCSS.MAX_HEIGHT, transformer: LengthTransformer }),
};

export default SizingUtilities;