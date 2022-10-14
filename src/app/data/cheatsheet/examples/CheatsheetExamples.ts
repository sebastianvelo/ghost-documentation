import { SuffixSeparator } from "lib/common/types/Separators";
import GhostPrefix from "lib/utility/enum/GhostPrefix";
import CheatsheetTableColumnSuffixes from "../CheatsheetTableColumnSuffixes";

const randomFromInterval = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

const setOf =
    (map: () => number | string, size = 6) => Array.from(new Set(Array(size).fill("").map(map)));

const ColorValue = () =>
    setOf(() => randomFromInterval(0, 255), 3).join(SuffixSeparator);
const ColorValues = (size?: number) =>
    setOf(ColorValue, size).sort();

const LengthValue = (min = 5, max = 25) =>
    randomFromInterval(min, max);
const LengthValues = (size?: number, min?: number, max?: number) =>
    setOf(() => LengthValue(min, max), size).sort();

const NumberValue = (min = 5, max = 25) =>
    randomFromInterval(min, max);
const NumberValues = (size?: number, min?: number, max?: number) =>
    setOf(() => NumberValue(min, max), size).sort();

const BorderValues = () => [
    "1",
    "2-green-solid",
    "3-red-dashed",
    "2-blue-dotted",
];

const examplesFromSuffixes = (prefix: GhostPrefix) => ({
    [prefix]: CheatsheetTableColumnSuffixes[prefix]
});

const colorExamples = (prefix: GhostPrefix) => ({
    [prefix]: ColorValues()
});

const CheatsheetExamples: any = {
    ...examplesFromSuffixes(GhostPrefix.CURSOR),
    ...colorExamples(GhostPrefix.CARET_COLOR),
    ...colorExamples(GhostPrefix.ACCENT_COLOR),
    ...examplesFromSuffixes(GhostPrefix.POINTER_EVENTS),
    ...examplesFromSuffixes(GhostPrefix.SCROLL_BEHAVIOR),
    ...examplesFromSuffixes(GhostPrefix.RESIZE),
    ...examplesFromSuffixes(GhostPrefix.USER_SELECT),

    [GhostPrefix.TRANSITION]: ["all-250-ease-in-out"],
    [GhostPrefix.TRANSITION_DELAY]: NumberValues(),
    [GhostPrefix.TRANSITION_DURATION]: NumberValues(),
    [GhostPrefix.TRANSITION_PROPERTY]: ["color"],
    ...examplesFromSuffixes(GhostPrefix.TRANSITION_TIMING_FUNCTION),

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

    ...colorExamples(GhostPrefix.BG_COLOR),
    ...examplesFromSuffixes(GhostPrefix.BG_ATTACHMENT),
    ...examplesFromSuffixes(GhostPrefix.BG_BLEND),
    ...examplesFromSuffixes(GhostPrefix.BG_CLIP),
    ...examplesFromSuffixes(GhostPrefix.BG_ORIGIN),
    ...examplesFromSuffixes(GhostPrefix.BG_POSITION),
    ...examplesFromSuffixes(GhostPrefix.BG_REPEAT),

    ...colorExamples(GhostPrefix.COLOR),
    ...examplesFromSuffixes(GhostPrefix.FONT_WEIGHT),
    [GhostPrefix.FONT_SIZE]: LengthValues(),
    ...examplesFromSuffixes(GhostPrefix.FONT_STYLE),
    ...examplesFromSuffixes(GhostPrefix.FONT_VARIANT),
    ...examplesFromSuffixes(GhostPrefix.FONT_VARIANT_CAPS),
    [GhostPrefix.TEXT_DECORATION]: ["underline-red-solid-10"],
    ...colorExamples(GhostPrefix.TEXT_DECORATION_COLOR),
    ...examplesFromSuffixes(GhostPrefix.TEXT_DECORATION_LINE),
    [GhostPrefix.TEXT_DECORATION_THICKNESS]: LengthValues(3, 1, 6),
    ...examplesFromSuffixes(GhostPrefix.TEXT_OVERFLOW),
    ...examplesFromSuffixes(GhostPrefix.TEXT_ALIGN),
    ...examplesFromSuffixes(GhostPrefix.LETTER_SPACING),
    ...examplesFromSuffixes(GhostPrefix.LINE_HEIGHT),
    ...examplesFromSuffixes(GhostPrefix.LIST_STYLE_TYPE),
    ...examplesFromSuffixes(GhostPrefix.TEXT_DECORATION_STYLE),
    [GhostPrefix.TEXT_SHADOW]: ["2-2", "3-3-4-red", "3-3-10-blue"],
    [GhostPrefix.FONT_FAMILY]: ["georgia", "times-new-roman", "arial", "courier-new", "sofia", "righteous"],

    ...examplesFromSuffixes(GhostPrefix.DISPLAY),
    ...examplesFromSuffixes(GhostPrefix.POSITION),
    [GhostPrefix.TOP]: LengthValues(),
    [GhostPrefix.BOTTOM]: LengthValues(),
    [GhostPrefix.RIGHT]: LengthValues(),
    [GhostPrefix.LEFT]: LengthValues(),
    ...examplesFromSuffixes(GhostPrefix.BOX),
    ...examplesFromSuffixes(GhostPrefix.FLOAT),
    ...examplesFromSuffixes(GhostPrefix.CLEAR),
    ...examplesFromSuffixes(GhostPrefix.OBJECT_FIT),
    ...examplesFromSuffixes(GhostPrefix.OVERFLOW),
    ...examplesFromSuffixes(GhostPrefix.OVERFLOW_Y),
    ...examplesFromSuffixes(GhostPrefix.OVERFLOW_X),
    ...examplesFromSuffixes(GhostPrefix.OVERSCROLL),
    ...examplesFromSuffixes(GhostPrefix.OVERSCROLL_Y),
    ...examplesFromSuffixes(GhostPrefix.OVERSCROLL_X),
    ...examplesFromSuffixes(GhostPrefix.VISIBILITY),

    [GhostPrefix.FLEX_BASIS]: ["3-4"],
    ...examplesFromSuffixes(GhostPrefix.FLEX_DIRECTION),
    ...examplesFromSuffixes(GhostPrefix.FLEX_WRAP),
    ...examplesFromSuffixes(GhostPrefix.FLEX_GROW),
    ...examplesFromSuffixes(GhostPrefix.FLEX_SHRINK),

    [GhostPrefix.GRID_TEMPLATE_COLUMNS]: NumberValues(6, 4, 12),
    [GhostPrefix.GRID_COLUMN_SPAN]: NumberValues(6, 2, 6),
    [GhostPrefix.GRID_COLUMN_START]: NumberValues(),
    [GhostPrefix.GRID_COLUMN_END]: NumberValues(),
    [GhostPrefix.GRID_TEMPLATE_ROWS]: NumberValues(6, 4, 12),
    [GhostPrefix.GRID_ROW_SPAN]: NumberValues(6, 2, 6),
    [GhostPrefix.GRID_ROW_START]: NumberValues(),
    [GhostPrefix.GRID_ROW_END]: NumberValues(),
    ...examplesFromSuffixes(GhostPrefix.GRID_FLOW),
    ...examplesFromSuffixes(GhostPrefix.GRID_AUTO_COLUMNS),
    ...examplesFromSuffixes(GhostPrefix.GRID_AUTO_ROWS),

    [GhostPrefix.GAP]: LengthValues(),
    [GhostPrefix.COLUMN_GAP]: LengthValues(),
    [GhostPrefix.ROW_GAP]: LengthValues(),
    [GhostPrefix.ORDER]: NumberValues(),

    ...examplesFromSuffixes(GhostPrefix.JUSTIFY_CONTENT),
    ...examplesFromSuffixes(GhostPrefix.JUSTIFY_ITEMS),
    ...examplesFromSuffixes(GhostPrefix.JUSTIFY_SELF),
    ...examplesFromSuffixes(GhostPrefix.ALIGN_CONTENT),
    ...examplesFromSuffixes(GhostPrefix.ALIGN_ITEMS),
    ...examplesFromSuffixes(GhostPrefix.ALIGN_SELF),
    ...examplesFromSuffixes(GhostPrefix.PLACE_CONTENT),
    ...examplesFromSuffixes(GhostPrefix.PLACE_ITEMS),
    ...examplesFromSuffixes(GhostPrefix.PLACE_SELF),

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
    [GhostPrefix.DIVIDE_Y]: BorderValues(),
    [GhostPrefix.DIVIDE_X]: BorderValues(),
    [GhostPrefix.BORDER_RADIUS]: ["0", "1rem", "2rem", "25%", "50px", "50%"],

    [GhostPrefix.OUTLINE]: BorderValues(),
    [GhostPrefix.OUTLINE_WIDTH]: LengthValues(3, 1, 4),
    [GhostPrefix.OUTLINE_OFFSET]: LengthValues(3, 1, 5),
    ...examplesFromSuffixes(GhostPrefix.OUTLINE_STYLE),
    ...colorExamples(GhostPrefix.OUTLINE_COLOR),

    [GhostPrefix.Z_INDEX]: NumberValues(),
};

export default CheatsheetExamples;