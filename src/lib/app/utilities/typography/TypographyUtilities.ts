import GhostPrefix from "../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../utility/enum/PropertyCSS";
import SimpleUtility from "../common/helpers/SimpleUtility";
import ColorTransformer from "../common/transformers/color/ColorTransformer";
import LengthTransformer from "../common/transformers/common/LengthTransformer";
import ReplaceSeparatorWithSpaceTransformer from "../common/transformers/common/ReplaceSeparatorWithSpaceTransformer";
import { LetterSpacingTransformer, LineHeightTransformer, TextDecorationTransformer, TextShadowTransformer } from "./transformers";

const TypographyUtilities = {
    ...SimpleUtility({
        prefix: GhostPrefix.COLOR,
        property: PropertyCSS.COLOR,
        transformer: ColorTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FONT_WEIGHT,
        property: PropertyCSS.FONT_WEIGHT
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FONT_SIZE,
        property: PropertyCSS.FONT_SIZE,
        transformer: LengthTransformer,
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FONT_FAMILY,
        property: PropertyCSS.FONT_FAMILY,
        transformer: ReplaceSeparatorWithSpaceTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TEXT_ALIGN,
        property: PropertyCSS.TEXT_ALIGN
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.LETTER_SPACING,
        property: PropertyCSS.LETTER_SPACING,
        transformer: LetterSpacingTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.LINE_HEIGHT,
        property: PropertyCSS.LINE_HEIGHT,
        transformer: LineHeightTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.LIST_STYLE_TYPE,
        property: PropertyCSS.LIST_STYLE_TYPE
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FONT_STYLE,
        property: PropertyCSS.FONT_STYLE
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FONT_VARIANT,
        property: PropertyCSS.FONT_VARIANT
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.FONT_VARIANT_CAPS,
        property: PropertyCSS.FONT_VARIANT_CAPS
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TEXT_DECORATION,
        property: PropertyCSS.TEXT_DECORATION,
        transformer: TextDecorationTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TEXT_DECORATION_LINE,
        property: PropertyCSS.TEXT_DECORATION_LINE
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TEXT_DECORATION_STYLE,
        property: PropertyCSS.TEXT_DECORATION_STYLE
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TEXT_DECORATION_THICKNESS,
        property: PropertyCSS.TEXT_DECORATION_THICKNESS,
        transformer: LengthTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TEXT_DECORATION_COLOR,
        property: PropertyCSS.TEXT_DECORATION_COLOR,
        transformer: ColorTransformer
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TEXT_OVERFLOW,
        property: PropertyCSS.TEXT_OVERFLOW
    }),
    ...SimpleUtility({
        prefix: GhostPrefix.TEXT_SHADOW,
        property: PropertyCSS.TEXT_SHADOW,
        transformer: TextShadowTransformer
    }),
};

export default TypographyUtilities;