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
import { toast } from "../firebaseConfig/toast";
import { registerUser } from "../firebaseConfig/firebaseConfig";

const Register: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  async function register() {
    if (email.trim() == "" || password.trim() == "") {
      toast("Email or Password is empty");
    }

    setBusy(true);
    if (password == cpassword) {
      const res = await registerUser(email, password);
      if (res) {
        toast("Signed Up Successfully");
      }
    } else {
      toast("Password does not match");
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
        <IonInput
          type="password"
          placeholder="Confirm Passowrd"
          onIonChange={(e: any) => setCpassword(e.target.value)}
        />
        <IonButton onClick={register}>Sign Up</IonButton>
        <p>
          Already have an Account <Link to="/login">Login</Link>{" "}
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Register;
