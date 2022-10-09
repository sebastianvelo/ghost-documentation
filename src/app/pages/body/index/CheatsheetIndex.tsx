import { FunctionComponent } from "react";
import Section, { SectionProps } from "./Section";

export interface CheatsheetIndexProps {
    sections: SectionProps[];
    setActive: (props: [sectionIdx: number, categoryIdx: number]) => void;
}

const CheatsheetIndex: FunctionComponent<CheatsheetIndexProps> = (props: CheatsheetIndexProps) => (
    <aside className="overflow-y_scroll space-y_24px">
        {props.sections.map((section, sectionIdx) =>
            <Section {...section} setActivity={(categoryIdx) => props.setActive([sectionIdx, categoryIdx])} />
        )}
    </aside>
);

export default CheatsheetIndex;