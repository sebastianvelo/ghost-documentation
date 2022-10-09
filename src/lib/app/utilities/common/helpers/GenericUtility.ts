import GhostPrefix from "../../../../utility/enum/GhostPrefix";
import GhostDeclaration from "../../../../utility/GhostDeclaration";
import SelectorTransformer from "../../../../utility/types/SelectorTransformer";

export interface IGenericUtility {
    prefix: GhostPrefix;
    selector?: SelectorTransformer;
    declarations: GhostDeclaration[];
}

const GenericUtility = (data: IGenericUtility) => ({
    [data.prefix]: { ...data }
});

export default GenericUtility;