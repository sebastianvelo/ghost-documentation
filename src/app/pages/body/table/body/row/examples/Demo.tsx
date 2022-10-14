import React, { FunctionComponent } from "react";
import Children from "./Children";

interface DemoProps {
    tag?: string;
    className: string;
    text?: string;
    children?: number;
    childrenClassName?: string;
    aditionalClassName?: string;
}

const Demo: FunctionComponent<DemoProps> = (props: DemoProps) =>
    React.createElement(props.tag ?? "div", {
        ...props,
        className: `${props.className} ${props.aditionalClassName}`,
        children: props.tag === "input" ? undefined : (
            <>
                {props.text}
                <Children size={props.children} {...props} />
            </>
        )
    })

export default Demo;