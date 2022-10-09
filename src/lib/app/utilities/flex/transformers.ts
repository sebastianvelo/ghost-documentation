export const FlexBasisTransformer = (suffix: string) => {
    const [divisor, dividend] = suffix.split("-");
    if (!dividend) return `${divisor}%`;

    const result = (+divisor / +dividend) * 100;
    return `${result}%`;
}

export const FlexDirectionTransformer = (suffix: string) => suffix.replace(/col/, "column");
