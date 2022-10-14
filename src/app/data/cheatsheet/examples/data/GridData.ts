import GhostPrefix from "lib/utility/enum/GhostPrefix";

const GridTemplateData = {
    aditionalClassName: "d_grid bg_primary w_400 h_400",
    childrenClassName: "bg_255-255-255-80 border_1",
    children: 12
};

const GridColumnSpanData = {
    parentClassName: "d_grid cols_12 bg_0-0-0-70 w_100% h_200",
    aditionalClassName: "bg_primary w_100% h_100% border_1 box_border",
    siblingsClassName: "bg_primaryLight",
    prevSiblings: 4,
    nextSiblings: 4,
};

const GridRowSpanData = {
    parentClassName: "d_grid rows_12 bg_0-0-0-70 w_100% h_200",
    aditionalClassName: "bg_primary w_100% h_100% border_1 box_border",
    siblingsClassName: "bg_primaryLight",
    prevSiblings: 4,
    nextSiblings: 4,
};

const GridData: any = {
    [GhostPrefix.GRID_TEMPLATE_COLUMNS]: GridTemplateData,
    [GhostPrefix.GRID_TEMPLATE_ROWS]: GridTemplateData,
    [GhostPrefix.GRID_COLUMN_SPAN]: GridColumnSpanData,
    [GhostPrefix.GRID_ROW_SPAN]: GridRowSpanData,
    [GhostPrefix.GRID_COLUMN_START]: {

    },
    [GhostPrefix.GRID_COLUMN_END]: {

    },
    [GhostPrefix.GRID_ROW_START]: {

    },
    [GhostPrefix.GRID_ROW_END]: {

    },
    [GhostPrefix.GRID_FLOW]: {
    },
    [GhostPrefix.GRID_AUTO_COLUMNS]: {
    },
    [GhostPrefix.GRID_AUTO_ROWS]: {
    },
};

export default GridData;