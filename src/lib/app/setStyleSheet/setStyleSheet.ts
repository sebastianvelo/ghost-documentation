import { Output } from "../../config/GhostConfig";
import getValueFromKeyOrDefault from "../../common/getValueFromKeyOrDefault";
import outputs from "./outputs/outputs";

const setStyleSheet = (output: Output = "document") =>
  getValueFromKeyOrDefault(outputs, output, "document");

export default setStyleSheet;