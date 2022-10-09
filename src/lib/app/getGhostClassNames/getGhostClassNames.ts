import { Source } from "../../config/GhostConfig";
import getValueFromKeyOrDefault from "../../common/getValueFromKeyOrDefault";
import sources from "./sources/sources";

const getGhostClassNames = (source: Source = "document"): string[] =>
  getValueFromKeyOrDefault(sources, source, "document");

export default getGhostClassNames;
