interface ChildrenProps {
    size?: number;
    childrenClassName?: string;
    aditionalClassName?: string;
}

const Children = (props: ChildrenProps) =>
    <>
        {Array(props.size ?? 0).fill("").map(() => (
            <div className={`${props.childrenClassName}`}></div>
        ))}
    </>;

export default Children;