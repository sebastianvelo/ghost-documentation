import Headline from "app/common/Headline";
import { FunctionComponent } from "react";
import CheatsheetBody from "./body/CheatsheetBody";

interface CheatsheetPageProps {

}

const CheatsheetPage: FunctionComponent<CheatsheetPageProps> = () => (
    <div>
        <Headline>Cheatsheet</Headline>
        <CheatsheetBody />
    </div>
);

export default CheatsheetPage;