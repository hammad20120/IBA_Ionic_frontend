import React, { useState } from "react";
import {
  IonContent,
  IonList,
  IonRadioGroup,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRadio,
  IonItemDivider,
} from "@ionic/react";

const ResourcesDashboard: React.FC = () => {
  const [selected, setSelected] = useState<string>("Food");
  return (
    <div style={{ height: "50%", width: "40%" }} className="ion-padding">
      <IonContent
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}
      >
        <h1>Resources</h1>
        <IonList>
          <IonRadioGroup
            value={selected}
            onIonChange={(e) => setSelected(e.detail.value)}
          >
            <IonItem>
              <IonLabel>Food</IonLabel>
              <IonRadio slot="start" value="Food" />
            </IonItem>

            <IonItem>
              <IonLabel>Medical</IonLabel>
              <IonRadio slot="start" value="Medical" />
            </IonItem>

            <IonItem>
              <IonLabel>Ambulance</IonLabel>
              <IonRadio slot="start" value="Ambulance" />
            </IonItem>
            <IonItem>
              <IonLabel>Fire Truck</IonLabel>
              <IonRadio slot="start" value="Fire Truck" />
            </IonItem>
          </IonRadioGroup>
        </IonList>
      </IonContent>
    </div>
  );
};

export default ResourcesDashboard;
