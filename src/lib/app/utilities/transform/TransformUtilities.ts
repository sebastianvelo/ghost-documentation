import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";

const TransformUtilities = {
    ...SimpleUtility({ prefix: GhostPrefix.MATRIX, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.MATRIX_3D, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.TRANSLATE, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.TRANSLATE_3D, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.TRANSLATE_X, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.TRANSLATE_Y, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.TRANSLATE_Z, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.SCALE, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.SCALE_3D, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.SCALE_X, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.SCALE_Y, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.SCALE_Z, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.ROTATE, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.ROTATE_3D, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.ROTATE_X, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.ROTATE_Y, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.ROTATE_Z, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.SKEW, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.SKEW_X, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.SKEW_Y, property: PropertyCSS.TRANSFORM }),
    ...SimpleUtility({ prefix: GhostPrefix.PERSPECTIVE, property: PropertyCSS.TRANSFORM }),
};

export default TransformUtilities;