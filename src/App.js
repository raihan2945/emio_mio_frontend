import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import Doctors from "./pages/Doctor/Doctors";
import Mio from "./pages/Mio/Mio";
import Chemists from "./pages/Chemist/Chemists";
import Promotion from "./pages/Promotion/Promotion";
import Survey from "./pages/Survey/Survey";
import Campaign from "./pages/Promotion/Campaign";
import Drafts from "./pages/Promotion/Drafts";
import MIOProfile from "./pages/Mio/Profile";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/doctors/profile" component={Doctors} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/mio/profile" component={MIOProfile} />
          <Route exact path="/mio" component={Mio} />
          <Route exact path="/chemists/profile:id" component={Chemists} />
          <Route exact path="/chemists" component={Chemists} />
          <Route exact path="/promotion" component={Promotion} />
          <Route exact path="/drafts" component={Drafts} />
          <Route exact path="/campaigns" component={Campaign} />
          <Route exact path="/survey" component={Survey} />
          {/* <Redirect from="*" to="/dashboard" /> */}
          <Route exact path="/tables" component={Tables} />
        </Main>
      </Switch>
    </div>
  );
}

export default App;

