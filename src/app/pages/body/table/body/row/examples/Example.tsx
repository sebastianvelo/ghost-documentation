import React, { FunctionComponent } from "react";
import Code from "./Code";
import Demo from "./Demo";
import Siblings from "./Siblings";

interface ExampleProps {
    className: string;
    tag?: string;
    text?: string;
    aditionalClassName?: string;
    parentClassName?: string;
    childrenClassName?: string;
    children?: number;
    siblingsClassName?: string;
    nextSiblings?: number;
    prevSiblings?: number;
}

const Example: FunctionComponent<ExampleProps> = (props: ExampleProps) => (
    <div className="d_flex fd_col justify_between align-items_center h_max-content py_16 px_32 rounded_0.25rem">
        <Code {...props} />
        <div className={`${props.parentClassName} w_100%`}>
            <Siblings {...props} size={props.prevSiblings} />
            <Demo {...props} />
            <Siblings {...props} size={props.nextSiblings} />
        </div>
    </div>
)

export default Example;