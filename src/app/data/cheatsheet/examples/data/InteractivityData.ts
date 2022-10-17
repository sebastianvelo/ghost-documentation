import GhostPrefix from "lib/utility/enum/GhostPrefix";

const InteractivityData: any = {
    [GhostPrefix.CURSOR]: {
        aditionalClassName: "bg_primary w_100% h_100",
    },
    [GhostPrefix.CARET_COLOR]: {
        aditionalClassName: "bg_white",
        tag: "input"
    },
    [GhostPrefix.ACCENT_COLOR]: {
        aditionalClassName: "bg_white w_100%",
        tag: "input",
        type: "range",
        value: 50,
        max: 100,
    },
    [GhostPrefix.RESIZE]: {
        aditionalClassName: "bg_primaryLight w_100% h_100 overflow_auto",
    },
    [GhostPrefix.USER_SELECT]: {
        tag: "p",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor neque, rutrum quis enim porta, congue vulputate est. Maecenas quis augue ut purus dictum ultricies eu non purus. Nullam accumsan accumsan felis id laoreet. Mauris imperdiet tellus felis. Cras nec rhoncus erat, molestie dapibus arcu. Donec eu lacus eleifend, gravida libero quis, sollicitudin lectus. ",
        aditionalClassName: "h_200 bg_primaryLight p_16"
    },
    [GhostPrefix.POINTER_EVENTS]: null,
    [GhostPrefix.SCROLL_BEHAVIOR]: null,
    [GhostPrefix.TRANSITION]: {
    },
    [GhostPrefix.TRANSITION_DELAY]: {
    },
    [GhostPrefix.TRANSITION_DURATION]: {
    },
    [GhostPrefix.TRANSITION_PROPERTY]: {
    },
    [GhostPrefix.TRANSITION_TIMING_FUNCTION]: {
    },
};

export default InteractivityData;