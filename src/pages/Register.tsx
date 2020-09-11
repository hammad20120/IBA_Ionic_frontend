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

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  function RegisterUser() {
    console.log(username, password, cpassword);
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
          placeholder="Email"
          onIonChange={(e: any) => setUsername(e.target.value)}
        />
        <IonInput
        type="password"
          placeholder="Passowrd"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonInput
        type="password"
          placeholder="Confirm Passowrd"
          onIonChange={(e: any) => setCpassword(e.target.value)}
        />
        <IonButton onClick={RegisterUser}>Login</IonButton>
        <p>Already have an Account <Link to="/login">Login</Link> </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
