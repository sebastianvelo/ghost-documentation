import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import LengthTransformer from "../common/transformers/common/LengthTransformer";
import { BoxTransformer } from "./transformers";

const BoxUtility = SimpleUtility({ prefix: GhostPrefix.BOX, property: PropertyCSS.BOX_SIZING, transformer: BoxTransformer });

const FloatUtility = SimpleUtility({ prefix: GhostPrefix.FLOAT, property: PropertyCSS.FLOAT });

const ClearUtility = SimpleUtility({ prefix: GhostPrefix.CLEAR, property: PropertyCSS.CLEAR });

const ObjectUtility = SimpleUtility({ prefix: GhostPrefix.OBJECT_FIT, property: PropertyCSS.OBJECT_FIT });

const OverflowUtility = SimpleUtility({ prefix: GhostPrefix.OVERFLOW, property: PropertyCSS.OVERFLOW });
const OverflowYUtility = SimpleUtility({ prefix: GhostPrefix.OVERFLOW_Y, property: PropertyCSS.OVERFLOW_Y });
const OverflowXUtility = SimpleUtility({ prefix: GhostPrefix.OVERFLOW_X, property: PropertyCSS.OVERFLOW_X });

const OverscrollUtility = SimpleUtility({ prefix: GhostPrefix.OVERSCROLL, property: PropertyCSS.OVERSCROLL });
const OverscrollYUtility = SimpleUtility({ prefix: GhostPrefix.OVERSCROLL_Y, property: PropertyCSS.OVERSCROLL_Y });
const OverscrollXUtility = SimpleUtility({ prefix: GhostPrefix.OVERSCROLL_X, property: PropertyCSS.OVERSCROLL_X });

const TopUtility = SimpleUtility({ prefix: GhostPrefix.TOP, property: PropertyCSS.TOP, transformer: LengthTransformer });
const BottomUtility = SimpleUtility({ prefix: GhostPrefix.BOTTOM, property: PropertyCSS.BOTTOM, transformer: LengthTransformer });
const RightUtility = SimpleUtility({ prefix: GhostPrefix.RIGHT, property: PropertyCSS.RIGHT, transformer: LengthTransformer });
const LeftUtility = SimpleUtility({ prefix: GhostPrefix.LEFT, property: PropertyCSS.LEFT, transformer: LengthTransformer });

const DisplayUtility = SimpleUtility({ prefix: GhostPrefix.DISPLAY, property: PropertyCSS.DISPLAY });

const PositionUtility = SimpleUtility({ prefix: GhostPrefix.POSITION, property: PropertyCSS.POSITION });

const VisibilityUtility = SimpleUtility({ prefix: GhostPrefix.VISIBILITY, property: PropertyCSS.VISIBILITY });

const ZUtility = SimpleUtility({ prefix: GhostPrefix.Z_INDEX, property: PropertyCSS.Z_INDEX });

const LayoutUtilities = {
    ...DisplayUtility,
    ...PositionUtility,
    ...BoxUtility,
    ...FloatUtility,
    ...ClearUtility,
    ...ObjectUtility,
    ...OverflowUtility,
    ...OverflowYUtility,
    ...OverflowXUtility,
    ...OverscrollUtility,
    ...OverscrollYUtility,
    ...OverscrollXUtility,
    ...TopUtility,
    ...BottomUtility,
    ...RightUtility,
    ...LeftUtility,
    ...ZUtility,
    ...VisibilityUtility,
};

export default LayoutUtilities;