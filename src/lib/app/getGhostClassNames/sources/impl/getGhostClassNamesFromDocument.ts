import sanitizeClassNames from "../common/sanitizeClassNames";
import GetClassNamesFromSource from "../GetClassNamesFromSource";

const getAllElementsFromDocument = () => Array.from(document.querySelectorAll("body, body *"));
const flatClasses = (e: Element) => e.className.split(" ");
const getAllClassesFromDocument = (): string[] => getAllElementsFromDocument().flatMap(flatClasses);
const getGhostClassNamesFromDocument: GetClassNamesFromSource = () => sanitizeClassNames(getAllClassesFromDocument()).sort();

export default getGhostClassNamesFromDocument;