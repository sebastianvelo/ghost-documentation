import PropertyCSS from "./enum/PropertyCSS";
import SuffixTransformer from "./types/SuffixTransformer";

interface GhostDeclaration {
    property: PropertyCSS;
    transformer?: SuffixTransformer;
}

export default GhostDeclaration;