import GhostPrefix from "lib/utility/enum/GhostPrefix";

const GapExampleData = {
    aditionalClassName: "d_grid cols_3 bg_primary w_200 h_200",
    childrenClassName: "bg_255-255-255-80 border_1",
    children: 9
};

const ContentExampleData = {
    aditionalClassName: "d_flex bg_primary",
    childrenClassName: "bg_255-255-255-80 h_50 w_50 border_1",
    parentClassName: "w_100%",
    children: 4
};

const FlexAndGridData: any = {
    [GhostPrefix.GAP]: GapExampleData,
    [GhostPrefix.COLUMN_GAP]: GapExampleData,
    [GhostPrefix.ROW_GAP]: GapExampleData,
    [GhostPrefix.JUSTIFY_CONTENT]: ContentExampleData,
    [GhostPrefix.JUSTIFY_ITEMS]: {
    },
    [GhostPrefix.JUSTIFY_SELF]: {
    },
    [GhostPrefix.ALIGN_CONTENT]: {
    },
    [GhostPrefix.ALIGN_ITEMS]: {
    },
    [GhostPrefix.ALIGN_SELF]: {
    },
    [GhostPrefix.PLACE_CONTENT]: {
    },
    [GhostPrefix.PLACE_ITEMS]: {
    },
    [GhostPrefix.PLACE_SELF]: {
    },
    [GhostPrefix.ORDER]: {

    },
};

export default FlexAndGridData;