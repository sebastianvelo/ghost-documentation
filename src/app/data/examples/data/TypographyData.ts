import GhostPrefix from "lib/utility/enum/GhostPrefix";

const TextExampleData = (aditionalClassName?: string, tag = "p") => ({
    tag,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor neque, rutrum quis enim porta, congue vulputate est. Maecenas quis augue ut purus dictum ultricies eu non purus. Nullam accumsan accumsan felis id laoreet. Mauris imperdiet tellus felis. Cras nec rhoncus erat, molestie dapibus arcu. Donec eu lacus eleifend, gravida libero quis, sollicitudin lectus. ",
    aditionalClassName: `border_2 p_12 ${aditionalClassName ?? ""}`,
});

const TextDecorationData = (aditionalClassName?: string) => TextExampleData(`leading_relaxed ${aditionalClassName}`);

const TypographyData: any = {
    [GhostPrefix.COLOR]: TextExampleData(),
    [GhostPrefix.FONT_WEIGHT]: TextExampleData(),
    [GhostPrefix.FONT_SIZE]: TextExampleData(),
    [GhostPrefix.FONT_STYLE]: TextExampleData(),
    [GhostPrefix.FONT_VARIANT]: TextExampleData(),
    [GhostPrefix.FONT_VARIANT_CAPS]: TextExampleData(),
    [GhostPrefix.TEXT_DECORATION]: TextExampleData(),
    [GhostPrefix.TEXT_DECORATION_LINE]: TextExampleData(),
    [GhostPrefix.TEXT_DECORATION_COLOR]: TextDecorationData("decoration-l_underline"),
    [GhostPrefix.TEXT_DECORATION_STYLE]: TextDecorationData("decoration-l_underline"),
    [GhostPrefix.TEXT_DECORATION_THICKNESS]: TextDecorationData("decoration-l_underline"),
    [GhostPrefix.TEXT_OVERFLOW]: TextExampleData(),
    [GhostPrefix.TEXT_SHADOW]: TextExampleData(),
    [GhostPrefix.TEXT_ALIGN]: TextExampleData(),
    [GhostPrefix.FONT_FAMILY]: TextExampleData(),
    [GhostPrefix.LETTER_SPACING]: TextExampleData(),
    [GhostPrefix.LINE_HEIGHT]: TextExampleData(),
    [GhostPrefix.LIST_STYLE_TYPE]: TextExampleData("", "li"),
};

export default TypographyData;