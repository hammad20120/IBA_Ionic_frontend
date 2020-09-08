import React from "react";
import { IonContent, IonList, IonItem, IonLabel } from "@ionic/react";

const Alerts: React.FC = () => {
  return (
    <div style={{ height: "40%", width: "40%" }} className="ion-padding">
      <IonContent
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
      >
        <h1>High Alerts</h1>
        <IonList>
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
