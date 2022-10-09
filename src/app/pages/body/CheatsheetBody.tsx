import CheatsheetData from "app/data/CheatsheetData";
import { FunctionComponent, useState } from "react";
import CheatsheetIndex from "./index/CheatsheetIndex";
import CheatsheetTable from "./table/CheatsheetTable";

interface CheatsheetBodyProps {

}

const CheatsheetBody: FunctionComponent<CheatsheetBodyProps> = () => {
    const [active, setActive] = useState<[sectionIdx: number, categoryIdx: number]>([0, 0]);
    const getActiveCategory = () => CheatsheetData.sections[active[0]].categories[active[1]];

    return (
        <div className="d_grid cols_5 h_70vh">
            <CheatsheetIndex {...CheatsheetData} setActive={setActive} />
            <CheatsheetTable category={getActiveCategory()} />
        </div>
    );
}

export default CheatsheetBody;