import React, { useState } from "react";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import "./CrisisDropDown.css";

const CrisisDropdown: React.FC = () => {
  const [crisis, setCrisis] = useState<string>();

  const options = {
    cssClass: "my-custom-interface",
  };

  return (
    <div
      style={{ color: "black", width: "40%", marginTop: "10px" }}
      className="ion-padding"
    >
      <IonItem lines="none">
        <IonLabel style={{ fontSize: "120%" }}>Select Crisis Type</IonLabel>
        <IonSelect
          value={crisis}
          interface="action-sheet"
          interfaceOptions={options}
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
