import { BackgroundPositioningMap, BackgroundRepeatMap } from "./suffixes";

export const BackgroundPositioningTransformer = (suffix: string) => BackgroundPositioningMap[suffix] ?? suffix;

export const BackgroundRepeatTransformer = (suffix: string) => BackgroundRepeatMap[suffix] ?? suffix;
