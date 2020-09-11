import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../firebaseConfig/firebaseConfig";
import { toast } from "../firebaseConfig/toast";

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    setBusy(true);
    const res = await loginUser(email, password);
    if (res) {
      toast("Logged in Successfully");
    }
    setBusy(false);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please Wait.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput
          type="email"
          placeholder="Email"
          onIonChange={(e: any) => setEmail(e.target.value)}
        />
        <IonInput
          type="password"
          placeholder="Passowrd"
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonButton onClick={login}>Login</IonButton>
        <p>
          Don't have an Account <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Login;
