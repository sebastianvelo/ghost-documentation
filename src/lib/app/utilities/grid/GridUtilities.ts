import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import { GridTemplateTransformer, GridSpanTransformer, GridAutoTransformer } from "./transformers";
import ReplaceSeparatorWithSpaceTransformer from "../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";

const GridUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_TEMPLATE_COLUMNS,
        property: PropertyCSS.GRID_TEMPLATE_COLUMNS,
        transformer: GridTemplateTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_TEMPLATE_ROWS,
        property: PropertyCSS.GRID_TEMPLATE_ROWS,
        transformer: GridTemplateTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_COLUMN_SPAN,
        property: PropertyCSS.GRID_COLUMN_SPAN,
        transformer: GridSpanTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_COLUMN_START,
        property: PropertyCSS.GRID_COLUMN_START
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_COLUMN_END,
        property: PropertyCSS.GRID_COLUMN_END
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_ROW_SPAN,
        property: PropertyCSS.GRID_ROW_SPAN,
        transformer: GridSpanTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_ROW_START,
        property: PropertyCSS.GRID_ROW_START
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_ROW_END,
        property: PropertyCSS.GRID_ROW_END
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_FLOW,
        property: PropertyCSS.GRID_FLOW,
        transformer: ReplaceSeparatorWithSpaceTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_AUTO_COLUMNS,
        property: PropertyCSS.GRID_AUTO_COLUMNS,
        transformer: GridAutoTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.GRID_AUTO_ROWS,
        property: PropertyCSS.GRID_AUTO_ROWS,
        transformer: GridAutoTransformer
    }),

};

export default GridUtilities;