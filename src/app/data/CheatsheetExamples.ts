import GhostPrefix from "lib/utility/enum/GhostPrefix";
import CheatsheetSuffixes from "./CheatsheetSuffixes";

const ColorValue = "4-200-100";
const LengthValue = "12";
const NumberValue = "2";
const BorderValue = "3-green-solid";

const randomFromInterval = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

const pickRandomOfArray = (suffixes: string[]) => {
    const idx = randomFromInterval(0, suffixes.length - 1)
    return suffixes[idx];
}

const randomExample = (prefix: GhostPrefix) => ({
    [prefix]: pickRandomOfArray(CheatsheetSuffixes[prefix])
});

const CheatsheetExamples: any = {
    ...randomExample(GhostPrefix.CURSOR),
    [GhostPrefix.CARET_COLOR]: ColorValue,
    [GhostPrefix.ACCENT_COLOR]: ColorValue,
    ...randomExample(GhostPrefix.POINTER_EVENTS),
    ...randomExample(GhostPrefix.SCROLL_BEHAVIOR),
    ...randomExample(GhostPrefix.RESIZE),
    ...randomExample(GhostPrefix.USER_SELECT),

    [GhostPrefix.TRANSITION]: ["all-250-ease-in-out"],
    [GhostPrefix.TRANSITION_DELAY]: NumberValue,
    [GhostPrefix.TRANSITION_DURATION]: NumberValue,
    [GhostPrefix.TRANSITION_PROPERTY]: ["color"],
    ...randomExample(GhostPrefix.TRANSITION_TIMING_FUNCTION),

    [GhostPrefix.MATRIX]: [],
    [GhostPrefix.MATRIX_3D]: [],
    [GhostPrefix.TRANSLATE]: [],
    [GhostPrefix.TRANSLATE_3D]: [],
    [GhostPrefix.TRANSLATE_X]: [],
    [GhostPrefix.TRANSLATE_Y]: [],
    [GhostPrefix.TRANSLATE_Z]: [],
    [GhostPrefix.SCALE]: [],
    [GhostPrefix.SCALE_3D]: [],
    [GhostPrefix.SCALE_X]: [],
    [GhostPrefix.SCALE_Y]: [],
    [GhostPrefix.SCALE_Z]: [],
    [GhostPrefix.ROTATE]: [],
    [GhostPrefix.ROTATE_3D]: [],
    [GhostPrefix.ROTATE_X]: [],
    [GhostPrefix.ROTATE_Y]: [],
    [GhostPrefix.ROTATE_Z]: [],
    [GhostPrefix.SKEW]: [],
    [GhostPrefix.SKEW_X]: [],
    [GhostPrefix.SKEW_Y]: [],
    [GhostPrefix.PERSPECTIVE]: [],

    [GhostPrefix.BG_COLOR]: ColorValue,
    ...randomExample(GhostPrefix.BG_ATTACHMENT),
    ...randomExample(GhostPrefix.BG_BLEND),
    ...randomExample(GhostPrefix.BG_CLIP),
    ...randomExample(GhostPrefix.BG_ORIGIN),
    ...randomExample(GhostPrefix.BG_POSITION),
    ...randomExample(GhostPrefix.BG_REPEAT),
    [GhostPrefix.BG_SIZE]: [],

    [GhostPrefix.COLOR]: ColorValue,
    ...randomExample(GhostPrefix.FONT_WEIGHT),
    [GhostPrefix.FONT_SIZE]: LengthValue,
    ...randomExample(GhostPrefix.FONT_STYLE),
    ...randomExample(GhostPrefix.FONT_VARIANT),
    ...randomExample(GhostPrefix.FONT_VARIANT_CAPS),
    [GhostPrefix.TEXT_DECORATION]: "underline-red-solid-10",
    [GhostPrefix.TEXT_DECORATION_COLOR]: ColorValue,
    ...randomExample(GhostPrefix.TEXT_DECORATION_LINE),
    ...randomExample(GhostPrefix.TEXT_DECORATION_STYLE),
    [GhostPrefix.TEXT_DECORATION_THICKNESS]: LengthValue,
    ...randomExample(GhostPrefix.TEXT_OVERFLOW),
    ...randomExample(GhostPrefix.TEXT_ALIGN),
    ...randomExample(GhostPrefix.LETTER_SPACING),
    ...randomExample(GhostPrefix.LINE_HEIGHT),
    ...randomExample(GhostPrefix.LIST_STYLE_TYPE),
    ...randomExample(GhostPrefix.TEXT_DECORATION_STYLE),
    [GhostPrefix.TEXT_SHADOW]: "3-3-10-blue",
    [GhostPrefix.FONT_FAMILY]: "verdana",

    ...randomExample(GhostPrefix.DISPLAY),
    ...randomExample(GhostPrefix.POSITION),
    [GhostPrefix.TOP]: LengthValue,
    [GhostPrefix.BOTTOM]: LengthValue,
    [GhostPrefix.RIGHT]: LengthValue,
    [GhostPrefix.LEFT]: LengthValue,
    ...randomExample(GhostPrefix.BOX),
    ...randomExample(GhostPrefix.FLOAT),
    ...randomExample(GhostPrefix.CLEAR),
    ...randomExample(GhostPrefix.OBJECT_FIT),
    ...randomExample(GhostPrefix.OVERFLOW),
    ...randomExample(GhostPrefix.OVERFLOW_Y),
    ...randomExample(GhostPrefix.OVERFLOW_X),
    ...randomExample(GhostPrefix.OVERSCROLL),
    ...randomExample(GhostPrefix.OVERSCROLL_Y),
    ...randomExample(GhostPrefix.OVERSCROLL_X),
    ...randomExample(GhostPrefix.VISIBILITY),

    [GhostPrefix.FLEX_BASIS]: "3-4",
    ...randomExample(GhostPrefix.FLEX_DIRECTION),
    ...randomExample(GhostPrefix.FLEX_WRAP),
    ...randomExample(GhostPrefix.FLEX_GROW),
    ...randomExample(GhostPrefix.FLEX_SHRINK),

    [GhostPrefix.GRID_TEMPLATE_COLUMNS]: NumberValue,
    [GhostPrefix.GRID_COLUMN_SPAN]: NumberValue,
    [GhostPrefix.GRID_COLUMN_START]: NumberValue,
    [GhostPrefix.GRID_COLUMN_END]: NumberValue,
    [GhostPrefix.GRID_TEMPLATE_ROWS]: NumberValue,
    [GhostPrefix.GRID_ROW_SPAN]: NumberValue,
    [GhostPrefix.GRID_ROW_START]: NumberValue,
    [GhostPrefix.GRID_ROW_END]: NumberValue,
    ...randomExample(GhostPrefix.GRID_FLOW),
    ...randomExample(GhostPrefix.GRID_AUTO_COLUMNS),
    ...randomExample(GhostPrefix.GRID_AUTO_ROWS),

    [GhostPrefix.GAP]: NumberValue,
    [GhostPrefix.COLUMN_GAP]: NumberValue,
    [GhostPrefix.ROW_GAP]: NumberValue,
    [GhostPrefix.ORDER]: NumberValue,

    ...randomExample(GhostPrefix.JUSTIFY_CONTENT),
    ...randomExample(GhostPrefix.JUSTIFY_ITEMS),
    ...randomExample(GhostPrefix.JUSTIFY_SELF),
    ...randomExample(GhostPrefix.ALIGN_CONTENT),
    ...randomExample(GhostPrefix.ALIGN_ITEMS),
    ...randomExample(GhostPrefix.ALIGN_SELF),
    ...randomExample(GhostPrefix.PLACE_CONTENT),
    ...randomExample(GhostPrefix.PLACE_ITEMS),
    ...randomExample(GhostPrefix.PLACE_SELF),

    [GhostPrefix.WIDTH]: LengthValue,
    [GhostPrefix.HEIGHT]: LengthValue,
    [GhostPrefix.MIN_WIDTH]: LengthValue,
    [GhostPrefix.MIN_HEIGHT]: LengthValue,
    [GhostPrefix.MAX_WIDTH]: LengthValue,
    [GhostPrefix.MAX_HEIGHT]: LengthValue,

    [GhostPrefix.PADDING]: LengthValue,
    [GhostPrefix.PADDING_RIGHT]: LengthValue,
    [GhostPrefix.PADDING_LEFT]: LengthValue,
    [GhostPrefix.PADDING_BOTTOM]: LengthValue,
    [GhostPrefix.PADDING_TOP]: LengthValue,
    [GhostPrefix.PADDING_X]: LengthValue,
    [GhostPrefix.PADDING_Y]: LengthValue,

    [GhostPrefix.MARGIN]: LengthValue,
    [GhostPrefix.MARGIN_RIGHT]: LengthValue,
    [GhostPrefix.MARGIN_LEFT]: LengthValue,
    [GhostPrefix.MARGIN_BOTTOM]: LengthValue,
    [GhostPrefix.MARGIN_TOP]: LengthValue,
    [GhostPrefix.MARGIN_X]: LengthValue,
    [GhostPrefix.MARGIN_Y]: LengthValue,

    [GhostPrefix.SPACE_X]: LengthValue,
    [GhostPrefix.SPACE_Y]: LengthValue,

    [GhostPrefix.BORDER]: BorderValue,
    [GhostPrefix.BORDER_RIGHT]: BorderValue,
    [GhostPrefix.BORDER_LEFT]: BorderValue,
    [GhostPrefix.BORDER_TOP]: BorderValue,
    [GhostPrefix.BORDER_BOTTOM]: BorderValue,
    [GhostPrefix.BORDER_Y]: BorderValue,
    [GhostPrefix.BORDER_X]: BorderValue,
    [GhostPrefix.BORDER_RADIUS]: "50%",

    [GhostPrefix.OUTLINE]: BorderValue,
    [GhostPrefix.OUTLINE_WIDTH]: LengthValue,
    [GhostPrefix.OUTLINE_OFFSET]: LengthValue,
    ...randomExample(GhostPrefix.OUTLINE_STYLE),
    [GhostPrefix.OUTLINE_COLOR]: ColorValue,

    [GhostPrefix.Z_INDEX]: NumberValue,
};

export default CheatsheetExamples;