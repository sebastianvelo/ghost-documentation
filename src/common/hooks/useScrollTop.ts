import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useScrollTop = () => {
    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        return () => unlisten();
    }, [history]);
}

export default useScrollTop;