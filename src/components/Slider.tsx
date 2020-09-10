import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonRange,
  IonLabel,
  IonIcon,
  IonItemDivider,
} from "@ionic/react";
import { sunny } from "ionicons/icons";
import { RangeValue } from "@ionic/core";
import "./Slider.css";

export const Slider: React.FC = () => {
  const [value, setValue] = useState(0);
  const [RangeColor, setRangeColor] = useState<string>("yellow");
  const onRangeChangeHandler = (e: any) => {
    setValue(e.detail.value as number);
    const sliderVal: number = e.detail.value as number;

    if (sliderVal < 25) {
      setRangeColor("yellow");
    } else if (sliderVal < 50) {
      setRangeColor("orange");
    } else if (sliderVal < 75) {
      setRangeColor("vividorange");
    } else {
      setRangeColor("danger");
    }
  };
  return (
    <div
      style={{ color: "black", width: "40%", marginTop: "50px" }}
      className="ion-padding"
    >
      <p style={{ fontSize: "130%", paddingLeft: "10px" }}>Crisis Severity</p>

      <IonItem lines="none">
        <IonRange
          max={75}
          value={value}
          step={25}
          onIonChange={onRangeChangeHandler}
          color={RangeColor}
          snaps
        />
      </IonItem>
      <IonItem lines="none">
        <IonLabel>
          Severity:
          {value < 25
            ? "Low"
            : value >= 25 && value < 50
            ? "Medium"
            : value >= 50 && value < 75
            ? "High"
            : "Extreme"}
        </IonLabel>
      </IonItem>
    </div>
  );
};

export default Slider;
