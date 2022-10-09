export interface ColorCustomizationConfig {
    [key: string]: string
}

let CustomColors: ColorCustomizationConfig = {

};

export const setColorAliases = (config: ColorCustomizationConfig) => {
    CustomColors = { ...CustomColors, ...config };
}
export const getValue = (alias: string) => CustomColors[alias] ?? null;