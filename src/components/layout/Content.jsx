import { Redirect, Route, Switch } from "react-router";

function Content() {
    return (
        <Switch>
            <Route path="/" />
            <Redirect />
        </Switch>
    );
}

export default Content;
