import GetClassNamesFromSource from "./GetClassNamesFromSource";
import getGhostClassNamesFromDocument from "./impl/getGhostClassNamesFromDocument";
import getGhostClassNamesFromFiles from "./impl/getGhostClassNamesFromFiles";

interface ISources {
    [key: string]: GetClassNamesFromSource;
}

const sources: ISources = {
    document: getGhostClassNamesFromDocument,
    files: getGhostClassNamesFromFiles,
};

export default sources;