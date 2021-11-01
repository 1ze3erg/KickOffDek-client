import { createContext, useContext } from "react";

const ContentContext = createContext();

function ContentProvider({ children }) {
    return <ContentContext.Provider value={{}}>{children}</ContentContext.Provider>;
}

function useContentContext() {
    return useContext(ContentContext);
}

export default ContentProvider;
export { useContentContext };
