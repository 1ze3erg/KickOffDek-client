import { createContext, useContext } from "react";

const AppContext = createContext();

function AppProvider({ children }) {
    return <AppContext.Provider>{children}</AppContext.Provider>;
}

function useAppContext() {
    return useContext(AppContext);
}

export default AppProvider;
export { useAppContext };
