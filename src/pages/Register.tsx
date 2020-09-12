import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonLoading,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "../firebaseConfig/toast";
import { check, registerUser } from "../firebaseConfig/firebaseConfig";
import "../CSS/LoginRegister.css";

const Register: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  check();
  async function register() {
    if (email.trim() === "" || password.trim() === "") {
      toast("Email or Password is empty");
    }

    setBusy(true);
    if (password === cpassword) {
      const res = await registerUser(username, email, password);
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
                  Sign Up
                </h4>
              </div>
              <div className="ion-padding">
                <IonItem lines="none">
                <IonInput
                  placeholder="User Name"
                  onIonChange={(e: any) => setUsername(e.target.value)}
                />
                </IonItem>
                <IonItem lines="none">
                  <IonInput
                    type="email"
                    placeholder="Email"
                    onIonChange={(e: any) => setEmail(e.target.value)}
                  />
                </IonItem>

                <IonItem lines="none">
                  <IonInput
                    type="password"
                    placeholder="Passowrd"
                    onIonChange={(e: any) => setPassword(e.target.value)}
                  />
                </IonItem>
                <IonItem lines="none">
                <IonInput
                  type="password"
                  placeholder="Confirm Passowrd"
                  onIonChange={(e: any) => setCpassword(e.target.value)}
                />
                </IonItem>
              </div>

              <div className="ion-padding">
                <IonButton
                  className="buttons"
                  onClick={register}
                  size="default"
                  expand="block"
                >
                  Sign Up
                </IonButton>
              </div>

              <div className="ion-padding">
                <p style={{ textAlign: "center" }}>
                  Already have an Account? 
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
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

export default Register;
