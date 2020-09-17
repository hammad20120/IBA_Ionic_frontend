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
  IonItem,
  IonButton,
} from "@ionic/react";
import Header from "./Header";
import firebase from "firebase";
import ResourcesDashboard from "./ResourcesDashboard";
import ResourcesCrisisDetails from "./ResourcesCrisisDetails";
import MapCrisisDetails from "./MapCrisisDetails";
import "../CSS/JoinCrisis.css";
interface IDMatchProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const JoinCrisis: React.FC<IDMatchProps> = ({ match }) => {
  var [crisisObjects, setCrisisObjects] = useState<any>("");
  const [RenderMap, setRenderMap] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setRenderMap(true), 700);
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

  return (
    <IonPage>
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent class="bg" className="ion-padding">
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader className="ion-text-center">
                  <h3 style={{ color: "black", fontSize: "150%" }}>
                    Crisis Location (MAP)
                  </h3>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonItem lines="none">
                  {RenderMap && crisisObjects && (
                    <MapCrisisDetails
                      lat={crisisObjects.lat}
                      lng={crisisObjects.lng}
                    />
                  )}
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
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
            </IonCardContent>
          </IonGrid>
        </IonCard>
        <IonCard className="second-card">
          <ResourcesCrisisDetails resources={crisisObjects.resources} />
        </IonCard>
        <IonButton
          style={{ float: "right", marginRight: "25px", marginBottom: "35px" }}
          color="themecolor"
          className="ion=padding"
        >
          Join Crisis
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default JoinCrisis;
