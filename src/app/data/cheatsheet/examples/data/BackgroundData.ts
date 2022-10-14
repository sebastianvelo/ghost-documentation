import GhostPrefix from "lib/utility/enum/GhostPrefix";

const BackgroundExampleData = () => ({
    aditionalClassName: "border_2 w_100% h_200",
});

const BackgroundData: any = {
    [GhostPrefix.BG_COLOR]: BackgroundExampleData(),
    [GhostPrefix.BG_ATTACHMENT]: null,
    [GhostPrefix.BG_BLEND]: null,
    [GhostPrefix.BG_CLIP]: null,
    [GhostPrefix.BG_ORIGIN]: null,
    [GhostPrefix.BG_POSITION]: null,
    [GhostPrefix.BG_REPEAT]: null,
    [GhostPrefix.BG_SIZE]: null,
};

export default BackgroundData;