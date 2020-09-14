import React, { useEffect, useState } from "react";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import "../CSS/CrisisDropDown.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { CrisisState } from "../reducers/CrisisReducer";
import { updateType } from "../actions/crisisAction";

const CrisisDropdown: React.FC = () => {
  const [crisisType, setCrisisType] = useState<string>("");
  const crisis = useSelector<RootState, CrisisState>((state) => state.crisis);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateType({ ...crisis, type: crisisType }));
  }, [crisisType]);

  const options = {
    cssClass: "my-custom-interface",
  };

  return (
    <div style={{ color: "black", marginTop: "10px" }} className="ion-padding">
      <IonItem lines="none">
        <IonLabel style={{ fontSize: "120%" }}>Select Crisis Type</IonLabel>
        <IonSelect
          value={crisisType}
          interface="action-sheet"
          interfaceOptions={options}
          onIonChange={(e) => setCrisisType(e.detail.value)}
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
