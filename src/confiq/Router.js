import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Login, SignUp, Profile, Orders } from "../containers/index.js";
import { Dashboard, PendingOrders, CurrentOrders, OrderHistory } from "../components/index.js"
import { auth, onAuthStateChanged, db, collection, query, where, onSnapshot } from './Firebase.js';
import { useState,useEffect } from "react";




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
},[])
    return (
        <Router>
            <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard">
                    <Profile user={userName}><Dashboard /></Profile>
                </Route>
                <Route exact path="/orders">
                    <Profile user={userName}><Orders /></Profile>
                </Route>
                <Route exact path="/pendingorders">
                    <Profile user={userName}><PendingOrders /></Profile>
                </Route>
                <Route exact path="/currentorders">
                    <Profile user={userName}><CurrentOrders /></Profile>
                </Route>
                <Route exact path="/orderhistory">
                    <Profile user={userName}><OrderHistory /></Profile>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;