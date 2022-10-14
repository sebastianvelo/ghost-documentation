interface SiblingsProps {
    size?: number;
    siblingsClassName?: string;
    aditionalClassName?: string;
}

const Siblings = (props: SiblingsProps) =>
    <>
        {Array(props.size ?? 0).fill("").map(() => (
            <div className={`${props.siblingsClassName} ${props.aditionalClassName}`}></div>
        ))}
    </>;

export default Siblings;