import GhostConfig from "./config/GhostConfig";
import getGhostClassNames from "./app/getGhostClassNames/getGhostClassNames";
import setStyleSheet from "./app/setStyleSheet/setStyleSheet";
import initializeConfig from "./config/initializeConfig";
import getStyleSheet from "./app/getStyleSheet/getStyleSheet";

const timerCalculator = () => {
  const startTime = performance.now();
  return {
    logTotal: (classNames: string[]) => {
      const ms = performance.now() - startTime
      console.log(`Build ${classNames.length} different classes `);
      console.log(`${ms} milliseconds`);
      console.log(`${ms / classNames.length} milliseconds per class`);
    }
  }
}

const initGhost = (config: GhostConfig) => {
  const timer = timerCalculator();
  initializeConfig(config);
  const classNames = getGhostClassNames(config.source);
  getStyleSheet(classNames);
  timer.logTotal(classNames);
  setStyleSheet(config.output);
};

export default initGhost;
