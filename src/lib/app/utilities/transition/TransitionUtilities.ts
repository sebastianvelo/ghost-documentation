import SimpleUtility from "../common/helpers/SimpleUtility";
import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import { TransitionMsTransformer, TransitionPropertyTransformer, TransitionTimingFunctionTransformer, TransitionTransformer } from "./transformers";

const TransitionUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.TRANSITION,
        property: PropertyCSS.TRANSITION,
        transformer: TransitionTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TRANSITION_PROPERTY,
        property: PropertyCSS.TRANSITION_PROPERTY,
        transformer: TransitionPropertyTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TRANSITION_DELAY,
        property: PropertyCSS.TRANSITION_DELAY,
        transformer: TransitionMsTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TRANSITION_DURATION,
        property: PropertyCSS.TRANSITION_DURATION,
        transformer: TransitionMsTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TRANSITION_TIMING_FUNCTION,
        property: PropertyCSS.TRANSITION_TIMING_FUNCTION,
        transformer: TransitionTimingFunctionTransformer
    }),
};

export default TransitionUtilities;