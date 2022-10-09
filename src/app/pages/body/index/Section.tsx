import { FunctionComponent } from "react";

export interface SectionProps {
    name: string;
    categories: {
        name: string;
    }[];
    setActivity?: (categoryIdx: number) => void;
}

const Section: FunctionComponent<SectionProps> = (props: SectionProps) => (
    <details open>
        <summary className="d_flex">
            <h2 className="m_0 w_100% pl_8px py_8px bg_255-255-255-75:hover transition_all-250">{props.name}</h2>
        </summary>
        <div className="d_flex fd_col pr_8px">
            {props.categories.map((category, idx) =>
                <p className="m_0 cursor_pointer p_1rem bg_255-255-255-50:hover transition_all-250" onClick={() => props.setActivity!(idx)}>{category.name}</p>
            )}
        </div>
    </details>
);

export default Section;