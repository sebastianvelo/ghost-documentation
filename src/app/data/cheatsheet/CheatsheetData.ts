import BackgroundUtilities from "lib/app/utilities/background/BackgroundUtilities";
import BorderUtilities from "lib/app/utilities/border/BorderUtilities";
import FlexUtilities from "lib/app/utilities/flex/FlexUtilities";
import FlexAndGridUtilities from "lib/app/utilities/flexAndGrid/FlexAndGridUtilities";
import GridUtilities from "lib/app/utilities/grid/GridUtilities";
import InteractivityUtilities from "lib/app/utilities/interactivity/InteractivityUtilities";
import LayoutUtilities from "lib/app/utilities/layout/LayoutUtilities";
import MarginUtilities from "lib/app/utilities/margin/MarginUtilities";
import OutlineUtilities from "lib/app/utilities/outline/OutlineUtilities";
import PaddingUtilities from "lib/app/utilities/padding/PaddingUtilities";
import SizingUtilities from "lib/app/utilities/sizing/SizingUtilities";
import SpaceUtilities from "lib/app/utilities/space/SpaceUtilities";
import TransitionUtilities from "lib/app/utilities/transition/TransitionUtilities";
import TypographyUtilities from "lib/app/utilities/typography/TypographyUtilities";

const CheatsheetData = {
    sections: [
        {
            name: "General",
            categories: [
                { name: "Typography", body: { utilities: TypographyUtilities } },
                { name: "Background", body: { utilities: BackgroundUtilities } },
                { name: "Sizing", body: { utilities: SizingUtilities } }
            ]
        },
        {
            name: "Spacing",
            categories: [
                { name: "Padding", body: { utilities: PaddingUtilities } },
                { name: "Margin", body: { utilities: MarginUtilities } },
                { name: "Space", body: { utilities: SpaceUtilities } }
            ]
        },
        {
            name: "Layout",
            categories: [
                { name: "Layout", body: { utilities: LayoutUtilities } },
            ]
        },
        {
            name: "Flex & Grid",
            categories: [
                { name: "Flex and Grid", body: { utilities: FlexAndGridUtilities } },
                { name: "Flex", body: { utilities: FlexUtilities } },
                { name: "Grid", body: { utilities: GridUtilities } },
            ]
        },
        {
            name: "Border & Outline",
            categories: [
                { name: "Border", body: { utilities: BorderUtilities } },
                { name: "Outline", body: { utilities: OutlineUtilities } },
            ]
        },
        {
            name: "Interactivity",
            categories: [
                { name: "Interactivity", body: { utilities: InteractivityUtilities } },
                { name: "Transition", body: { utilities: TransitionUtilities } },
            ]
        },
    ]
};

export default CheatsheetData;