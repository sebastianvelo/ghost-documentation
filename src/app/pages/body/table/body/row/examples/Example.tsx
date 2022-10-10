import React, { FunctionComponent } from "react";

const Tag = (props: { tag: string }) =>
    <span className="txt_86-156-214">{props.tag}</span>;
const Attr = (props: { attr: string }) =>
    <span className="txt_91-203-254">{props.attr}</span>;
const Value = (props: { value: string }) =>
    <span className="txt_206-145-101">{props.value}</span>;

const EscapedDiv = (className: string, tag: string = "div") =>
    <pre>
        &lt;<Tag tag={tag} /> <Attr attr="class" />=<Value value={`"${className} ..."`} />&gt;
        ...
        &lt;/<Tag tag={tag} />&gt;
    </pre>;

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
        <h2 className="bg_black txt-size_12 w_100% rounded_0.25rem txt_white txt-align_center">
            {EscapedDiv(props.className, props.tag)}
        </h2>
        <div className={`${props.parentClassName} w_100%`}>
            {Array(props.prevSiblings ?? 0).fill("").map(() => (
                <div className={`${props.siblingsClassName} ${props.aditionalClassName}`}>
                </div>
            ))}
            {React.createElement(props.tag ?? "div", {
                className: `${props.className} ${props.aditionalClassName}`,
                children: (
                    <>
                        {props.text}
                        {Array(props.children ?? 0).fill("").map(() => (
                            <div className={props.childrenClassName}></div>
                        ))}
                    </>
                )
            })}
            {Array(props.nextSiblings ?? 0).fill("").map(() => (
                <div className={`${props.siblingsClassName} ${props.aditionalClassName}`}>
                </div>
            ))}
        </div>
    </div>
)

export default Example;