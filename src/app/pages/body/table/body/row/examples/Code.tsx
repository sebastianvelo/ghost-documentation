import { FunctionComponent } from "react";

interface CodeProps {
    className: string,
    tag?: string
}

const Tag = (props: { tag: string }) =>
    <span className="txt_86-156-214">{props.tag}</span>;
const Attr = (props: { attr: string }) =>
    <span className="txt_91-203-254">{props.attr}</span>;
const Value = (props: { value: string }) =>
    <span className="txt_206-145-101">{props.value}</span>;

const EscapedTag = (props: CodeProps) => (
    <pre>
        &lt;<Tag tag={props.tag ?? "div"} /> <Attr attr="class" />=<Value value={`"${props.className} ..."`} />&gt;
        ...
        &lt;/<Tag tag={props.tag ?? "div"} />&gt;
    </pre>
);

const Code: FunctionComponent<CodeProps> = (props: CodeProps) => (
    <h2 className="bg_black txt-size_12 w_100% rounded_0.25rem txt_white txt-align_center">
        <EscapedTag {...props} />
    </h2>
);

export default Code;