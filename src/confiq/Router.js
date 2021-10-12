
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import {Login,SignUp,Home} from "../containers/index.js";

  function AppRouter(){
      return(
          <Router>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/login" component={Login}/>
                  <Route exact path="/signup" component={SignUp}/>
              </Switch>
          </Router>
      )
  }

  export default AppRouter;