import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import Header from "../components/Header";
import firebase from "firebase";

const Profile: React.FC = () => {
  var [profile, setProfile] = useState<any>("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref(`users/` + user.uid)
          .once("value", (snapshot) => {
            if (snapshot.val() != null) {
              setProfile({
                ...snapshot.val(),
              });
            }
          });
      }
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent class="bg" className="ion-padding">
        <IonCard>
          <IonCardHeader
            style={{ backgroundColor: "#27C7CC", textAlign: "center" }}
          >
            <IonCardTitle style={{ color: "#fff", fontSize: "1.75rem" }}>
              Profile
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid style={{ color: "black", fontSize: "1.0rem" }}>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>User Name: </IonLabel>
                  <IonLabel>{profile.username}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Email: </IonLabel>
                  <IonLabel>{profile.email}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Contact Number: </IonLabel>
                  <IonLabel>{profile.contact}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>CNIC: </IonLabel>
                  <IonLabel>{profile.cnic}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>City: </IonLabel>
                  <IonLabel>{profile.city}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Account Updated: </IonLabel>
                  <IonLabel>{profile.Created_At}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1">
                  <IonLabel>Address: </IonLabel>
                  <IonLabel>{profile.address}</IonLabel>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonButton
          color="seagreen"
          className="ion-padding"
          style={{ float: "right" }}
        >
          <Link
            to="/updateprofile"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Update
          </Link>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
