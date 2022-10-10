import GhostPrefix from "lib/utility/enum/GhostPrefix";

const MarginRowExampleData = {
    parentClassName: "d_flex bg_primary w_max-content",
    aditionalClassName: "bg_255-255-255-90 border_1 w_50 h_50",
    siblingsClassName: "bg_255-255-255-50",
    nextSiblings: 2,
    prevSiblings: 2,
};

const MarginColExampleData = {
    parentClassName: "bg_primary w_max-content",
    aditionalClassName: "bg_255-255-255-90 border_1 w_50 h_50",
    siblingsClassName: "bg_255-255-255-50",
    nextSiblings: 2,
    prevSiblings: 2,
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