import { PrefixSuffixSeparator } from "../../common/types/Separators";
import utilities from "./Utilities";

const utilityExists = (className: string) => {
    const [prefix] = className.split(PrefixSuffixSeparator);
    return !!utilities[prefix]
}

export default utilityExists;