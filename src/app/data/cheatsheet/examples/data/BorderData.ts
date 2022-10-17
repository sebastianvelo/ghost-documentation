import GhostPrefix from "lib/utility/enum/GhostPrefix";

const BorderExampleData = {
    aditionalClassName: "w_100% h_100 bg_primaryLight",
};

const DivideXExampleData = {
    aditionalClassName: "d_flex bg_primary w_max-content",
    childrenClassName: "bg_primaryLight h_100 w_50",
    children: 4
};

const DivideYExampleData = {
    aditionalClassName: "bg_primary w_max-content",
    childrenClassName: "bg_primaryLight h_50 w_50",
    children: 4
};

const BorderRadiusExampleData = {
    aditionalClassName: "w_200 h_200 border_1 bg_primaryLight",
};

const OutlineExampleData = {
    aditionalClassName: "outline-s_solid h_100 bg_primary"
}

const BorderData: any = {
    [GhostPrefix.BORDER]: BorderExampleData,
    [GhostPrefix.BORDER_RIGHT]: BorderExampleData,
    [GhostPrefix.BORDER_LEFT]: BorderExampleData,
    [GhostPrefix.BORDER_TOP]: BorderExampleData,
    [GhostPrefix.BORDER_BOTTOM]: BorderExampleData,
    [GhostPrefix.BORDER_Y]: BorderExampleData,
    [GhostPrefix.BORDER_X]: BorderExampleData,
    [GhostPrefix.DIVIDE_Y]: DivideYExampleData,
    [GhostPrefix.DIVIDE_X]: DivideXExampleData,
    [GhostPrefix.BORDER_RADIUS]: BorderRadiusExampleData,
    [GhostPrefix.OUTLINE]: BorderExampleData,
    [GhostPrefix.OUTLINE_WIDTH]: OutlineExampleData,
    [GhostPrefix.OUTLINE_OFFSET]: OutlineExampleData,
    [GhostPrefix.OUTLINE_COLOR]: OutlineExampleData,
    [GhostPrefix.OUTLINE_STYLE]: {
        aditionalClassName: "h_100 bg_primary"
    },
};

export default BorderData;