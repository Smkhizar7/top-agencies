
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Login, SignUp, Home, Profile, Orders } from "../containers/index.js";
import { Dashboard, PendingOrders, CurrentOrders,OrderHistory } from "../components/index.js"

function AppRouter() {
const userName="Ponka"
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={NavBar} /> */}
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard">
                    <Profile user={userName}><Dashboard /></Profile>
                </Route>
                <Route exact path="/orders">
                    <Profile><Orders /></Profile>
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