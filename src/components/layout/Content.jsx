import { Redirect, Route, Switch } from "react-router";
import { routes } from "../../config/routes";
import { useAppContext } from "../../contexts/AppContext";
import { getRole } from "../../helpers/localStorage";

function Content() {
    const { auth } = useAppContext();
    const role = auth && getRole() === "user" ? "user" : auth && getRole() === "admin" ? "admin" : "guest";
    return (
        <Switch>
            {routes[role].route.map((elem, idx) => (
                <Route key={idx} path={elem.path} component={elem.component} />
            ))}
            <Redirect from={routes[role].redirect.from} to={routes[role].redirect.to} />
        </Switch>
    );
}

export default Content;
