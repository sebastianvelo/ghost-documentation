import utilityExists from "../../../utilities/utilityExists";

const removeDuplicates = (arr: any[]) => Array.from(new Set(arr));
const filterInvalidClasses = (arr: string[]) => removeDuplicates(arr).filter(utilityExists);

const sanitizeClassNames = (arr: string[]) => filterInvalidClasses(removeDuplicates(arr)); 

export default sanitizeClassNames;