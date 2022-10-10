const LengthTransformer = (suffix: string) =>
    Number.isNaN(+suffix) ? suffix : `${suffix}px`;

export default LengthTransformer;