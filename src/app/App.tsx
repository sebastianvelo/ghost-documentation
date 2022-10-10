import { FunctionComponent } from "react";
import CheatsheetPage from "./pages/CheatsheetPage";

interface AppProps {

}

const App: FunctionComponent<AppProps> = () => (
    <div className="font_inter">
        <nav className="h_10vh p_0 m_0 bg_primary">
            <h1 className="p_1rem m_0 font_righteous txt-size_3rem txt-shadow_2-2-10-secondary tracking_normal tracking_widest:hover transition_all-400 cursor-pointer">
                Ghost
            </h1>
        </nav>
        <main className="h_85vh bg_primaryLight overflow-y_scroll px_32px">
            <CheatsheetPage />
        </main>
        <footer className="h_5vh bg_primary">
            <p className="m_0 pos_absolute bottom_8px right_8px">Made with ♥ by Sebastian Velo</p>
        </footer>
    </div>
);

export default App;