import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import Header from "./Header";
import firebase from "firebase";
import "../CSS/JoinCrisis.css";
interface IDMatchProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const CrisisDetails: React.FC<IDMatchProps> = ({ match }) => {
  var [crisisObjects, setCrisisObjects] = useState<any>("");
  var [usersInfo, setUsersInfo] = useState<any[]>([]);

  useEffect(() => {
    firebase
      .database()
      .ref(`crisis/` + match.params.id)
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setCrisisObjects({
            ...snapshot.val(),
          });
        }
      });

  
  }, []);


  useEffect(() => {
    firebase
      .database()
      .ref(`crisis/` + match.params.id)
      .child("Joined_Users")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          var keys = snapshot.val();

          if (keys) {
            var promises = keys.map((key: any) => {
              return firebase.database().ref("users").child(key).once("value");
            });

            Promise.all(promises).then(function (snapshots) {
              snapshots.forEach((snapshot: any) => {
                setUsersInfo((user: any) => [...user, snapshot.val()]);
              });
            });
          }
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
          <IonGrid>
            <IonCardContent style={{ color: "black", fontSize: "1.0rem" }}>
              <IonRow>
                <IonCol>
                  <IonCardHeader className="ion-text-center">
                    <h3 style={{ color: "black", fontSize: "150%" }}>
                      Crisis Info
                    </h3>
                  </IonCardHeader>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>User Name: </IonLabel>
                  <IonLabel>{crisisObjects.createdBy}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Crisis Type: </IonLabel>
                  <IonLabel>{crisisObjects.type}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Crisis Severity: </IonLabel>
                  <IonLabel>{crisisObjects.severity}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Status: </IonLabel>
                  <IonLabel>{crisisObjects.status}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Resources: </IonLabel>
                  <IonLabel>{" " + crisisObjects.resources}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Created At: </IonLabel>
                  <IonLabel>{crisisObjects.Created_At}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="6">
                  <IonLabel>Address: </IonLabel>
                  <IonLabel>{crisisObjects.location}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCardHeader className="ion-text-center">
                    <h3 style={{ color: "black", fontSize: "150%" }}>
                      Users Joined
                    </h3>
                  </IonCardHeader>
                </IonCol>
              </IonRow>

              {usersInfo.map((key: any) => (
                <IonRow>
                  <IonCol size="12" offset-sm="1" size-sm="6">
                    <IonLabel>{key.username}</IonLabel>
                  </IonCol>
                </IonRow>
              ))}
            </IonCardContent>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CrisisDetails;
