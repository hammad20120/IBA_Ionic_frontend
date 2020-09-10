import React, { useState } from "react";
import {
  IonContent,
  IonItem,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { fastFood, medkit, car, man, bonfire, star } from "ionicons/icons";
import "./Resources.css";

const ResourcesDashboard: React.FC = () => {
 /* const [selected, setSelected] = useState<string>(""); */
  return (
    <div style={{ height: "100%", width: "100%" }} className="ion-padding">
      <IonContent>
        <h1 style={{ textAlign: "center" }}>Resources</h1>

      {/*  <IonSelect
          value={selected}
          multiple={true}
          onIonChange={(e) => setSelected(e.detail.value)}
      > */}

        <IonItem lines="none" style={{float: "right"}}>
        <IonButton color="buttons" className="dashboardbutton">
          <div >
            <IonIcon icon={fastFood} className="dashboardicon"></IonIcon>
            <br />
            <br />
            Food
          </div>
        </IonButton>
        </IonItem>

        <IonItem lines="none" style={{float: "right"}}>
        <IonButton color="buttons" className="dashboardbutton">
          <div>
            <IonIcon icon={star} className="dashboardicon"></IonIcon>
            <br />
            <br />
            Ambulance
          </div>
        </IonButton>
        </IonItem>
        <IonItem lines="none" style={{float: "right"}}>
        <IonButton color="buttons" className="dashboardbutton">
          <div>
            <IonIcon icon={bonfire} className="dashboardicon"></IonIcon>
            <br />
            <br />
            Fire Truck
          </div>
        </IonButton>
        </IonItem>
        <IonItem lines="none" style={{float: "right"}}>
        <IonButton color="buttons" className="dashboardbutton">
          <div>
            <IonIcon icon={medkit} className="dashboardicon"></IonIcon>
            <br />
            <br />
            Medical
          </div>
        </IonButton>
        </IonItem>
        <IonItem lines="none" style={{float: "right"}}>
        <IonButton color="buttons" className="dashboardbutton">
          <div>
            <IonIcon icon={man} className="dashboardicon"></IonIcon>
            <br />
            <br />
            Rescue Vehicle
          </div>
        </IonButton>
        </IonItem>
        <IonItem lines="none" style={{float: "right"}}>
        <IonButton color="buttons" className="dashboardbutton">
          <div>
            <IonIcon icon={car} className="dashboardicon"></IonIcon>
            <br />
            <br />
            Police
          </div>
        </IonButton>
        </IonItem>
      </IonContent>
    </div>
  );
};

export default ResourcesDashboard;
