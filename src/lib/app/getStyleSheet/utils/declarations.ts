import Utility from "../../../utility/Utility";
import Declaration from "../types/Declaration";

export const getDeclarationsFromUtility = (utility: Utility, suffix: string): Declaration[] =>
    utility.declarations.map(declaration => ({
        property: declaration.property,
        value: declaration.transformer ? declaration.transformer(suffix) : suffix
    }));