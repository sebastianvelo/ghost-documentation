import GhostPrefix from "lib/utility/enum/GhostPrefix";

const MarginRowExampleData = {
    parentClassName: "d_flex w_max-content",
    aditionalClassName: "bg_primary border_1 w_25 h_25",
    siblingsClassName: "bg_primaryLight",
    nextSiblings: 2,
    prevSiblings: 2,
};

const MarginColExampleData = {
    parentClassName: "w_max-content",
    aditionalClassName: "bg_primary border_1 w_25 h_25",
    siblingsClassName: "bg_primaryLight",
    nextSiblings: 1,
    prevSiblings: 1,
};

const MarginData: any = {
    [GhostPrefix.MARGIN]: MarginRowExampleData,
    [GhostPrefix.MARGIN_RIGHT]: MarginRowExampleData,
    [GhostPrefix.MARGIN_LEFT]: MarginRowExampleData,
    [GhostPrefix.MARGIN_BOTTOM]: MarginColExampleData,
    [GhostPrefix.MARGIN_TOP]: MarginColExampleData,
    [GhostPrefix.MARGIN_X]: MarginRowExampleData,
    [GhostPrefix.MARGIN_Y]: MarginColExampleData,
};

export default MarginData;