import GhostDeclaration from "./GhostDeclaration";
import SelectorTransformer from "./types/SelectorTransformer";

interface Utility {
    declarations: GhostDeclaration[];
    selector?: SelectorTransformer;
}

export default Utility;