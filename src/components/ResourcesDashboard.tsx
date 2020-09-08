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
import { textOutline } from "ionicons/icons";

const ResourcesDashboard: React.FC = () => {
  const [selected, setSelected] = useState<string>("Food");
  return (
    <div style={{ height: "100%", width: "100%" }} className="ion-padding">
      <IonContent>
        <h1 style={{textAlign: "center"}}>Resources</h1>
        <IonList lines="none">
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
