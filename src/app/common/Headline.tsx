import { FunctionComponent, ReactChildren } from "react";

const sizes: any = {
    lg: "1.125rem",
    xs: "1.25rem",
    sm: "1.5rem",
    md: "1.875rem",
    base: "2.25rem",
    xl: "3rem"
};

interface HeadlineProps {
    children: string | ReactChildren;
    size?: string;
}

const Headline: FunctionComponent<HeadlineProps> = (props: HeadlineProps) => (
    <h1 className={`txt-size_${sizes[props.size ?? "base"]}`}>
        {props.children}
    </h1>
);

export default Headline;