import React from "react";
import { IonContent, IonList, IonItem, IonLabel } from "@ionic/react";

const Alerts: React.FC = () => {
  return (
    <div style={{ height: "100%", width: "100%" }} className="ion-padding">
      <IonContent>
        <h1 style={{textAlign: "center"}}>High Alerts</h1>
        <IonList lines="none">
          <IonItem color="high1">
            <IonLabel>Covid 19</IonLabel>
          </IonItem>
          <IonItem color="high2">
            <IonLabel>Karachi Flood</IonLabel>
          </IonItem>
          <IonItem color="high3">
            <IonLabel>Airplane Crash</IonLabel>
          </IonItem>
          <IonItem color="high4">
            <IonLabel>Terrorist Attack</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </div>
  );
};

export default Alerts;
