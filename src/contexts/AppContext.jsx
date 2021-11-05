import { createContext, useContext, useState } from "react";
import { getToken } from "../helpers/localStorage";

const AppContext = createContext();

function AppProvider({ children }) {
    const [auth, setAuth] = useState(getToken() ? true : false);
    const [user, setUser] = useState({});
    return <AppContext.Provider value={{ auth, setAuth, user, setUser }}>{children}</AppContext.Provider>;
}

function useAppContext() {
    return useContext(AppContext);
}

export default AppProvider;
export { useAppContext };
