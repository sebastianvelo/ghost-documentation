import { FunctionComponent } from "react";

const valueIntegerValues = ["px", "rem", "em", "%", "length", "width"];
const valueIsItInteger = (value: string) => !Number.isNaN(+value) || valueIntegerValues.some(v => value.includes(v));

const getStyle = (value: string) =>
    valueIsItInteger(value) ? "txt_181-206-137" : "txt_206-127-58";

interface ValueProps {
    value: string;
}

const Value: FunctionComponent<ValueProps> = (props: ValueProps) => (
    <span className={getStyle(props.value)}>
        &nbsp;{props.value}
    </span>
);

export default Value;