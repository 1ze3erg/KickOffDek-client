import { createContext } from "react";

const ContentContext = createContext();

function ContentProvider({ children }) {
    return <AppContext.Provider>{children}</AppContext.Provider>;
}

function useContentContext() {
    return useContext(ContentContext);
}

export default ContentProvider;
export { useContentContext };
