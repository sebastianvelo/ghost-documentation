import setStyleSheetInDocument from "./impl/setStyleSheetInDocument";
import setStyleSheetInFile from "./impl/setStyleSheetInFile";
import SetStyleSheetInOutput from "./SetStyleSheetInOutput";

interface IOutputs {
    [key: string]: SetStyleSheetInOutput;
}

const outputs: IOutputs = {
    document: setStyleSheetInDocument,
    file: setStyleSheetInFile
};

export default outputs;