import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonLoading,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../firebaseConfig/firebaseConfig";
import { toast } from "../firebaseConfig/toast";
import "../CSS/LoginRegister.css";
import firebase from "firebase";

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    setBusy(true);
    const res = await loginUser(email, password);
    if (res) {
      toast("Logged in Successfully").then(() => {
        setTimeout(function () {
          window.location.assign("/page/Welcome");
        }, 1500);
      });
    }
    setBusy(false);
  }

  useEffect (() =>{
    firebase.auth().onAuthStateChanged((user) =>{
      if(user && window.location.href === 'http://localhost:8100/login' ){
        window.location.assign('/page/Welcome')
      }
    })
  })

  return (
    <IonPage>
      <IonLoading message="Please Wait.." duration={0} isOpen={busy} />
      <IonContent class="bg-color" className="ion-padding">
        <IonGrid class="grids" className="ion-padding">
          <IonRow class="rows" className="ion-justify-content-center">
            <IonCol
              class="cols"
              className="ion-align-self-center"
              size-md="6"
              size-lg="5"
              size-xs="12"
            >
              <div className="ion-text-center">
                <h4 className="ion-padding" style={{ fontSize: "150%" }}>
                  Login Form
                </h4>
              </div>
              <div className="ion-padding">
                <IonItem lines="none">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput
                    type="email"
                    onIonChange={(e: any) => setEmail(e.target.value)}
                    required
                  />
                </IonItem>

                <IonItem lines="none">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput
                    type="password"
                    onIonChange={(e: any) => setPassword(e.target.value)}
                    required
                  />
                </IonItem>
              </div>

              <div className="ion-padding">
                <IonButton
                  className="buttons"
                  onClick={login}
                  size="default"
                  expand="block"
                >
                  Login
                </IonButton>
              </div>

              <div className="ion-padding">
                <p style={{ textAlign: "center" }}>
                  Don't have an Account?{" "}
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Register
                  </Link>
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
