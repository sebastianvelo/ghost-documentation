import CheatsheetData from "app/data/cheatsheet/CheatsheetData";
import initGhost from "lib";
import config from "lib/ghost.config";
import { FunctionComponent, useEffect, useState } from "react";
import CheatsheetIndex from "./index/CheatsheetIndex";
import CheatsheetTable from "./table/CheatsheetTable";

interface CheatsheetBodyProps {

}

const CheatsheetBody: FunctionComponent<CheatsheetBodyProps> = () => {
    const [active, setActive] = useState<[sectionIdx: number, categoryIdx: number]>([0, 0]);
    const getActiveCategory = () => CheatsheetData.sections[active[0]].categories[active[1]];

    const handler = (tuple: [number, number]) => {
        setActive(tuple);
    }

    useEffect(() => {
        initGhost(config);
    }, [active]);

    return (
        <div className="d_grid cols_6 h_70vh">
            <CheatsheetIndex {...CheatsheetData} setActive={handler} />
            <CheatsheetTable category={getActiveCategory()} />
        </div>
    );
}

export default CheatsheetBody;