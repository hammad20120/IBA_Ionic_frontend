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
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "../firebaseConfig/toast";
import { check, registerUser } from "../firebaseConfig/firebaseConfig";
import "../CSS/LoginRegister.css";
import firebase from "firebase";

const Profile: React.FC = () => {
  const user = firebase.auth().currentUser;
  var email = user != null ? user.email : "";
  var uid = user != null ? user.uid : "";
  var username = user != null ? user.displayName : "";
  var today = new Date();
  var Created_At =
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

  const [contact, setContact] = useState("");
  const [cnic, setCnic] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  async function profile() {
    firebase
      .database()
      .ref("users")
      .child(uid)
      .set({ contact, cnic, address, city, email, username, Created_At })
      .then(() => {
        toast("Profile Updated Successfully");
      })
      .then(() => {
        setTimeout(function () {
          window.location.assign("/");
        }, 3000);
      });
  }

  return (
    <IonPage>
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
                  Update Your Profile
                </h4>
              </div>
              <div className="ion-padding">
                <IonItem lines="none">
                  <IonLabel position="floating"> Contact Number </IonLabel>
                  <IonInput
                    type="number"
                    onIonChange={(e: any) => setContact(e.target.value)}
                  />
                </IonItem>
              </div>
              <div className="ion-padding">
                <IonItem lines="none">
                  <IonLabel position="floating"> CNIC </IonLabel>
                  <IonInput
                    type="number"
                    onIonChange={(e: any) => setCnic(e.target.value)}
                  />
                </IonItem>
              </div>
              <div className="ion-padding">
                <IonItem lines="none">
                  <IonLabel position="floating"> Address </IonLabel>
                  <IonInput
                    type="text"
                    onIonChange={(e: any) => setAddress(e.target.value)}
                  />
                </IonItem>
              </div>
              <div className="ion-padding">
                <IonItem lines="none">
                  <IonLabel position="floating"> City </IonLabel>
                  <IonInput
                    type="text"
                    onIonChange={(e: any) => setCity(e.target.value)}
                  />
                </IonItem>
              </div>

              <div className="ion-padding">
                <IonButton
                  className="buttons"
                  onClick={profile}
                  size="default"
                  expand="block"
                >
                  Update
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
