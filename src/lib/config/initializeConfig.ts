import { setColorAliases } from "./CustomColors";
import GhostConfig from "./GhostConfig";

const initializeConfig = (config: GhostConfig) => {
    if (config.aliases?.colors) {
        setColorAliases(config.aliases.colors);
    }
}

export default initializeConfig