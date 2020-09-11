import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {
    console.log(username, password);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
        type="password"
          placeholder="Email"
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput
        type="password"
          placeholder="Passowrd"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton onClick={loginUser}>Login</IonButton>
        <p>Don't have an Account <Link to="/register">Register</Link></p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
