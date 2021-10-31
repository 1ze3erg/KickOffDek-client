import { Redirect, Route, Switch } from "react-router";
import { routes } from "../../config/routes";

function Content() {
    const role = "user";
    return (
        <Switch>
            {routes[role].route.map((elem, idx) => (
                <Route key={idx} path={elem.path} component={elem.component} />
            ))}
            <Redirect from={routes[role].redirect.from} to={routes[role].redirect.from} />
        </Switch>
    );
}

export default Content;
