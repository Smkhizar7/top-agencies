
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Login, SignUp, Home,Profile } from "../containers/index.js";
import { Dashboard } from "../components/index.js"

function AppRouter() {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={NavBar} /> */}
                <Route exact path="/" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard" component={Dashboard} />


            </Switch>
        </Router>
    )
}

export default AppRouter;