import React from "react";
import { IonContent, IonList, IonItem, IonLabel } from "@ionic/react";

const Alerts: React.FC = () => {
  return (
    <div style={{ height: "100%", width: "100%" }} className="ion-padding">
      <IonContent>
        <h1 style={{textAlign: "center"}}>High Alerts</h1>
        <IonList lines="none">
          <IonItem>
            <IonLabel>Covid 19</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Karachi Flood</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Airplane Crash</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Terrorist Attack</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </div>
  );
};

export default Alerts;
