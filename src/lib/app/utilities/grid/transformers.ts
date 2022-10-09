export const GridTemplateTransformer = (suffix: string) => `repeat(${suffix}, minmax(0, 1fr))`;

export const GridSpanTransformer = (suffix: string) => `span ${suffix} / span ${suffix}`;

export const GridAutoTransformer = (suffix: string) => {
    if (["min", "max"].includes(suffix))
        return `${suffix}-content`;
    return suffix;
};
