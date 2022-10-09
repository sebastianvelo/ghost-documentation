import GhostPrefix from "../../../../utility/enum/GhostPrefix";
import PropertyCSS from "../../../../utility/enum/PropertyCSS";
import SuffixTransformer from "../../../../utility/types/SuffixTransformer";
import IUtilities from "../../IUtilities";

export interface ISimpleUtility {
    prefix: GhostPrefix;
    property: PropertyCSS;
    transformer?: SuffixTransformer;
}

const SimpleUtility = (data: ISimpleUtility): IUtilities => ({
    [data.prefix]: { declarations: [{ ...data }] }
});

export default SimpleUtility;