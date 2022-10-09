import { ContentMap, ItemsMap, SelfMap } from "./suffixes";

export const ContentTransformer = (suffix: string) => ContentMap[suffix];

export const AlignItemsTransformer = (suffix: string) => ItemsMap[suffix];

export const AlignSelfTransformer = (suffix: string) => SelfMap[suffix];

export const OrderTransformer = (suffix: string) => {
    if (suffix === "first") return "-9999";
    if (suffix === "last") return "9999";
    if (suffix === "none") return "0";
    return suffix;
}

export const GridGapTransformer = (suffix: string) => Number.isNaN(+suffix) ? suffix : `${suffix}px`;
