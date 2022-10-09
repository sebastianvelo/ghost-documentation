import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import { ContentTransformer, AlignItemsTransformer, AlignSelfTransformer, GridGapTransformer, OrderTransformer } from "./transformers";

const FlexAndGridUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.ORDER,
        property: PropertyCSS.ORDER,
        transformer: OrderTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GAP,
        property: PropertyCSS.GAP,
        transformer: GridGapTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.COLUMN_GAP,
        property: PropertyCSS.COLUMN_GAP,
        transformer: GridGapTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.ROW_GAP,
        property: PropertyCSS.ROW_GAP,
        transformer: GridGapTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.JUSTIFY_CONTENT,
        property: PropertyCSS.JUSTIFY_CONTENT,
        transformer: ContentTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.JUSTIFY_ITEMS,
        property: PropertyCSS.JUSTIFY_ITEMS
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.JUSTIFY_SELF,
        property: PropertyCSS.JUSTIFY_SELF
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.ALIGN_CONTENT,
        property: PropertyCSS.ALIGN_CONTENT,
        transformer: ContentTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.ALIGN_ITEMS,
        property: PropertyCSS.ALIGN_ITEMS,
        transformer: AlignItemsTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.ALIGN_SELF,
        property: PropertyCSS.ALIGN_SELF,
        transformer: AlignSelfTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.PLACE_CONTENT,
        property: PropertyCSS.PLACE_CONTENT,
        transformer: ContentTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.PLACE_ITEMS,
        property: PropertyCSS.PLACE_ITEMS
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.PLACE_SELF,
        property: PropertyCSS.PLACE_SELF
    }),
};

export default FlexAndGridUtilities;