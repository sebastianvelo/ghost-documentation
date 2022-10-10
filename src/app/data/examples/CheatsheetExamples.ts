import GhostPrefix from "lib/utility/enum/GhostPrefix";
import CheatsheetSuffixes from "../CheatsheetSuffixes";

const randomFromInterval = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

const allSufixes = (prefix: GhostPrefix) => ({
    [prefix]: CheatsheetSuffixes[prefix]
});

const multi = (size = 6, map: () => number | string) => Array(size).fill("").map(map);
const ColorValue = () => `${randomFromInterval(0, 255)}-${randomFromInterval(0, 255)}-${randomFromInterval(0, 255)}`;
const ColorValues = (size?: number) => multi(size, ColorValue).sort();
const LengthValue = (min = 5, max = 25) => randomFromInterval(min, max);
const LengthValues = (size?: number, min?: number, max?: number) => multi(size, () => LengthValue(min, max)).sort();
const NumberValue = () => randomFromInterval(5, 25);
const NumberValues = (size?: number) => multi(size, NumberValue).sort();
const BorderValues = () => [
    "1",
    "2-green-solid",
    "3-red-dashed",
    "2-blue-dotted",
];

const CheatsheetExamples: any = {
    ...allSufixes(GhostPrefix.CURSOR),
    [GhostPrefix.CARET_COLOR]: ColorValues(),
    [GhostPrefix.ACCENT_COLOR]: ColorValues(),
    ...allSufixes(GhostPrefix.POINTER_EVENTS),
    ...allSufixes(GhostPrefix.SCROLL_BEHAVIOR),
    ...allSufixes(GhostPrefix.RESIZE),
    ...allSufixes(GhostPrefix.USER_SELECT),

    [GhostPrefix.TRANSITION]: ["all-250-ease-in-out"],
    [GhostPrefix.TRANSITION_DELAY]: NumberValues(),
    [GhostPrefix.TRANSITION_DURATION]: NumberValues(),
    [GhostPrefix.TRANSITION_PROPERTY]: ["color"],
    ...allSufixes(GhostPrefix.TRANSITION_TIMING_FUNCTION),

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

    [GhostPrefix.BG_COLOR]: ColorValues(),
    ...allSufixes(GhostPrefix.BG_ATTACHMENT),
    ...allSufixes(GhostPrefix.BG_BLEND),
    ...allSufixes(GhostPrefix.BG_CLIP),
    ...allSufixes(GhostPrefix.BG_ORIGIN),
    ...allSufixes(GhostPrefix.BG_POSITION),
    ...allSufixes(GhostPrefix.BG_REPEAT),

    [GhostPrefix.COLOR]: ColorValues(),
    ...allSufixes(GhostPrefix.FONT_WEIGHT),
    [GhostPrefix.FONT_SIZE]: LengthValues(),
    ...allSufixes(GhostPrefix.FONT_STYLE),
    ...allSufixes(GhostPrefix.FONT_VARIANT),
    ...allSufixes(GhostPrefix.FONT_VARIANT_CAPS),
    [GhostPrefix.TEXT_DECORATION]: ["underline-red-solid-10"],
    [GhostPrefix.TEXT_DECORATION_COLOR]: ColorValues(),
    ...allSufixes(GhostPrefix.TEXT_DECORATION_LINE),
    [GhostPrefix.TEXT_DECORATION_THICKNESS]: LengthValues(3, 1, 6),
    ...allSufixes(GhostPrefix.TEXT_OVERFLOW),
    ...allSufixes(GhostPrefix.TEXT_ALIGN),
    ...allSufixes(GhostPrefix.LETTER_SPACING),
    ...allSufixes(GhostPrefix.LINE_HEIGHT),
    ...allSufixes(GhostPrefix.LIST_STYLE_TYPE),
    ...allSufixes(GhostPrefix.TEXT_DECORATION_STYLE),
    [GhostPrefix.TEXT_SHADOW]: ["2-2", "3-3-4-red", "3-3-10-blue"],
    [GhostPrefix.FONT_FAMILY]: ["georgia", "times-new-roman", "arial", "courier-new", "sofia", "righteous"],

    ...allSufixes(GhostPrefix.DISPLAY),
    ...allSufixes(GhostPrefix.POSITION),
    [GhostPrefix.TOP]: LengthValues(),
    [GhostPrefix.BOTTOM]: LengthValues(),
    [GhostPrefix.RIGHT]: LengthValues(),
    [GhostPrefix.LEFT]: LengthValues(),
    ...allSufixes(GhostPrefix.BOX),
    ...allSufixes(GhostPrefix.FLOAT),
    ...allSufixes(GhostPrefix.CLEAR),
    ...allSufixes(GhostPrefix.OBJECT_FIT),
    ...allSufixes(GhostPrefix.OVERFLOW),
    ...allSufixes(GhostPrefix.OVERFLOW_Y),
    ...allSufixes(GhostPrefix.OVERFLOW_X),
    ...allSufixes(GhostPrefix.OVERSCROLL),
    ...allSufixes(GhostPrefix.OVERSCROLL_Y),
    ...allSufixes(GhostPrefix.OVERSCROLL_X),
    ...allSufixes(GhostPrefix.VISIBILITY),

    [GhostPrefix.FLEX_BASIS]: ["3-4"],
    ...allSufixes(GhostPrefix.FLEX_DIRECTION),
    ...allSufixes(GhostPrefix.FLEX_WRAP),
    ...allSufixes(GhostPrefix.FLEX_GROW),
    ...allSufixes(GhostPrefix.FLEX_SHRINK),

    [GhostPrefix.GRID_TEMPLATE_COLUMNS]: NumberValues(),
    [GhostPrefix.GRID_COLUMN_SPAN]: NumberValues(),
    [GhostPrefix.GRID_COLUMN_START]: NumberValues(),
    [GhostPrefix.GRID_COLUMN_END]: NumberValues(),
    [GhostPrefix.GRID_TEMPLATE_ROWS]: NumberValues(),
    [GhostPrefix.GRID_ROW_SPAN]: NumberValues(),
    [GhostPrefix.GRID_ROW_START]: NumberValues(),
    [GhostPrefix.GRID_ROW_END]: NumberValues(),
    ...allSufixes(GhostPrefix.GRID_FLOW),
    ...allSufixes(GhostPrefix.GRID_AUTO_COLUMNS),
    ...allSufixes(GhostPrefix.GRID_AUTO_ROWS),

    [GhostPrefix.GAP]: LengthValues(),
    [GhostPrefix.COLUMN_GAP]: LengthValues(),
    [GhostPrefix.ROW_GAP]: LengthValues(),
    [GhostPrefix.ORDER]: NumberValues(),

    ...allSufixes(GhostPrefix.JUSTIFY_CONTENT),
    ...allSufixes(GhostPrefix.JUSTIFY_ITEMS),
    ...allSufixes(GhostPrefix.JUSTIFY_SELF),
    ...allSufixes(GhostPrefix.ALIGN_CONTENT),
    ...allSufixes(GhostPrefix.ALIGN_ITEMS),
    ...allSufixes(GhostPrefix.ALIGN_SELF),
    ...allSufixes(GhostPrefix.PLACE_CONTENT),
    ...allSufixes(GhostPrefix.PLACE_ITEMS),
    ...allSufixes(GhostPrefix.PLACE_SELF),

    [GhostPrefix.WIDTH]: LengthValues(6, 50, 400),
    [GhostPrefix.HEIGHT]: LengthValues(6, 50, 400),
    [GhostPrefix.MIN_WIDTH]: LengthValues(),
    [GhostPrefix.MIN_HEIGHT]: LengthValues(),
    [GhostPrefix.MAX_WIDTH]: LengthValues(),
    [GhostPrefix.MAX_HEIGHT]: LengthValues(),

    [GhostPrefix.PADDING]: LengthValues(),
    [GhostPrefix.PADDING_RIGHT]: LengthValues(),
    [GhostPrefix.PADDING_LEFT]: LengthValues(),
    [GhostPrefix.PADDING_BOTTOM]: LengthValues(),
    [GhostPrefix.PADDING_TOP]: LengthValues(),
    [GhostPrefix.PADDING_X]: LengthValues(),
    [GhostPrefix.PADDING_Y]: LengthValues(),

    [GhostPrefix.MARGIN]: LengthValues(),
    [GhostPrefix.MARGIN_RIGHT]: LengthValues(),
    [GhostPrefix.MARGIN_LEFT]: LengthValues(),
    [GhostPrefix.MARGIN_BOTTOM]: LengthValues(),
    [GhostPrefix.MARGIN_TOP]: LengthValues(),
    [GhostPrefix.MARGIN_X]: LengthValues(),
    [GhostPrefix.MARGIN_Y]: LengthValues(),

    [GhostPrefix.SPACE_X]: LengthValues(),
    [GhostPrefix.SPACE_Y]: LengthValues(),

    [GhostPrefix.BORDER]: BorderValues(),
    [GhostPrefix.BORDER_RIGHT]: BorderValues(),
    [GhostPrefix.BORDER_LEFT]: BorderValues(),
    [GhostPrefix.BORDER_TOP]: BorderValues(),
    [GhostPrefix.BORDER_BOTTOM]: BorderValues(),
    [GhostPrefix.BORDER_Y]: BorderValues(),
    [GhostPrefix.BORDER_X]: BorderValues(),
    [GhostPrefix.BORDER_RADIUS]: ["50%"],

    [GhostPrefix.OUTLINE]: BorderValues(),
    [GhostPrefix.OUTLINE_WIDTH]: LengthValues(),
    [GhostPrefix.OUTLINE_OFFSET]: LengthValues(),
    ...allSufixes(GhostPrefix.OUTLINE_STYLE),
    [GhostPrefix.OUTLINE_COLOR]: ColorValues(),

    [GhostPrefix.Z_INDEX]: NumberValues(),
};

export default CheatsheetExamples;