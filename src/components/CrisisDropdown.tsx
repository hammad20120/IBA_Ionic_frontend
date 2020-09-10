import React, { useState } from "react";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

const CrisisDropdown: React.FC = () => {
  const [crisis, setCrisis] = useState<string>();

  return (
    <div
      style={{ color: "black", width: "40%", marginTop: "10px" }}
      className="ion-padding"
    >
      <IonItem lines="none">
        <IonLabel style={{ fontSize: "120%" }}>Select Crisis Type</IonLabel>
        <IonSelect
          value={crisis}
          okText="Ok"
          cancelText="Dismiss"
          onIonChange={(e) => setCrisis(e.detail.value)}
        >
          <IonSelectOption value="covid">Covid'19</IonSelectOption>
          <IonSelectOption value="flood">Karachi Flood</IonSelectOption>
          <IonSelectOption value="airplane">Airplane Crash</IonSelectOption>
          <IonSelectOption value="terrorist">Terrorist Attack</IonSelectOption>
        </IonSelect>
      </IonItem>
    </div>
  );
};
export default CrisisDropdown;