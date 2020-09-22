import Menu from "./components/Menu";
import Page from "./pages/Page";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateProfile from "./pages/UpdateProfile";
import Profile from "./components/Profile"
import CrisisList from "./components/CrisisList";
import JoinCrisis from "./components/JoinCrisis";
import YourCrisisList from "./components/YourCrisisList";
import JoinCrisisList from "./components/JoinCrisisList";
import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import CrisisDetails from "./components/CrisisDetails";
import firebase from 'firebase'

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/page/:name" component={Page} exact />
            <Redirect from="/" to="/login" exact />
            <Route path="/crisislist" component={CrisisList} />
            <Route path="/profile" component={Profile} />
            <Route path="/joincrisis/:id" component={JoinCrisis} />
            <Route path="/yourcrisis" component={YourCrisisList} />
            <Route path="/joincrisislist" component={JoinCrisisList} />
            <Route path="/crisisdetails/:id" component={CrisisDetails} />
          </IonRouterOutlet>
        </IonSplitPane>

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/updateprofile" component={UpdateProfile} />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
