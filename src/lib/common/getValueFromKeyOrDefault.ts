interface FunctionMap<T> {
    [key: string]: (x?: any) => T;
}

const getValueFromKeyOrDefault = <T>(map: FunctionMap<T>, key: string, def: string) =>
    map[key] ? map[key]() : map[def]();

export default getValueFromKeyOrDefault;