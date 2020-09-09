import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import "./Page.css";
import ResourcesDashboard from "../components/ResourcesDashboard";
import Alerts from "../components/Alerts";
import Map from "../components/Map";
import Search from "../components/Search";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="bg-class">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle slot="start">{name}</IonTitle>
          <Search />
        </IonToolbar>
      </IonHeader>

      <IonContent class="bg">
        <IonCard>
          <IonCardHeader className="ion-text-center">
            <h3 style={{ color: "black", fontSize: "200%" }}>
              Nearby Crisis Location (MAP)
            </h3>
          </IonCardHeader>
          <IonCardContent>
            <div
              style={{ width: "100%", height: "70vh" }}
              className="ion-padding"
            >
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwTTqHEnOff6WlFNHwdQwBBLjEA4a-DLI&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </IonCardContent>
        </IonCard>

        <IonCard class="third-card" className="ion-float-right">
          <Alerts />
        </IonCard>

        <IonCard class="second-card">
          <ResourcesDashboard />
        </IonCard>


         <IonButton style={{float: "right", marginRight: "37px", marginBottom: "35px"}} color="high1">Clear</IonButton>  
         <IonButton style={{float: "right", marginRight: "25px", marginBottom: "35px"}} color="themecolor">Proceed</IonButton> 
      
      </IonContent>
    </IonPage>
  );
};

export default Page;
