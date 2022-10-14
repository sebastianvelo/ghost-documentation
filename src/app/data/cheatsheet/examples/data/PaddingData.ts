import GhostPrefix from "lib/utility/enum/GhostPrefix";

const PaddingExampleData = {
    aditionalClassName: "d_flex bg_primary w_max-content",
    childrenClassName: "bg_primaryLight h_50 w_50 border_1",
    children: 4,
};

const PaddingData: any = {
    [GhostPrefix.PADDING]: PaddingExampleData,
    [GhostPrefix.PADDING_RIGHT]: PaddingExampleData,
    [GhostPrefix.PADDING_LEFT]: PaddingExampleData,
    [GhostPrefix.PADDING_BOTTOM]: PaddingExampleData,
    [GhostPrefix.PADDING_TOP]: PaddingExampleData,
    [GhostPrefix.PADDING_X]: PaddingExampleData,
    [GhostPrefix.PADDING_Y]: PaddingExampleData
};

export default PaddingData;