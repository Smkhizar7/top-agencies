
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Login, SignUp, Home, Profile } from "../containers/index.js";
import { Dashboard, PendingOrders, CurrentOrders,OrderHistory } from "../components/index.js"

function AppRouter() {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={NavBar} /> */}
                <Route exact path="/" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard">
                    <Profile><Dashboard /></Profile>
                </Route>
                <Route exact path="/pendingorders">
                    <Profile><PendingOrders /></Profile>
                </Route>
                <Route exact path="/currentorders">
                    <Profile><CurrentOrders /></Profile>
                </Route>
                <Route exact path="/orderhistory">
                    <Profile><OrderHistory /></Profile>
                </Route>


            </Switch>
        </Router>
    )
}

export default AppRouter;