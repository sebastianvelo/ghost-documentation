import { FunctionComponent, ReactChildren } from "react";

interface HeadlineProps {
    children: string | ReactChildren;
}

const Headline: FunctionComponent<HeadlineProps> = (props: HeadlineProps) => (
    <h1 className="txt-size_2.5rem" >{props.children}</h1>
);

export default Headline;