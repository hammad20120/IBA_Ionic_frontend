import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import "./Page.css";
import ResourcesDashboard from "../components/ResourcesDashboard";
import Alerts from "../components/Alerts";
import Map from "../components/Map";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div
          style={{ width: "60%", height: "80vh" }}
          className="ion-float-right ion-padding"
        >
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwTTqHEnOff6WlFNHwdQwBBLjEA4a-DLI&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <ResourcesDashboard />
        <Alerts />
        <IonButton className="ion-padding">Proceed</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
