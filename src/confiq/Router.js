import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Login, SignUp, Profile, Orders } from "../containers/index.js";
import { Dashboard, PendingOrders, CurrentOrders, OrderHistory, NavBar } from "../components/index.js"
import { auth, onAuthStateChanged, db, collection, query, where, onSnapshot } from './Firebase.js';
import { useState, useEffect } from "react";




function AppRouter() {

    const [userName, setUserName] = useState('');
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const q = query(collection(db, "users"), where("userId", "==", user.uid));
                onSnapshot(q, (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        setUserName(doc.data().companyName)
                    });
                });
            } else {
            }
        })
    }, [])
    return (
        <Router>
            <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard">
                    <NavBar user={userName}><Dashboard /></NavBar>
                </Route>
                <Route exact path="/orders">
                    <Orders />
                </Route>
                <Route exact path="/pendingorders">
                    <NavBar user={userName}><PendingOrders /></NavBar>
                </Route>
                <Route exact path="/currentorders">
                    <CurrentOrders />
                </Route>
                <Route exact path="/orderhistory">
                    <OrderHistory />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;