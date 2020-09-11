import React, { useState } from "react";
import { IonItem, IonRange, IonLabel } from "@ionic/react";
import "../CSS/Slider.css";

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
    <div style={{ color: "black", marginTop: "10px" }} className="ion-padding">
      <IonItem lines="none">
        <IonLabel style={{ fontSize: "120%" }}>Crisis Severity</IonLabel>
      </IonItem>
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
        <IonLabel style={{ fontSize: "110%" }}>
          Severity:
          {value < 25
            ? " Low"
            : value >= 25 && value < 50
            ? " Medium"
            : value >= 50 && value < 75
            ? " High"
            : " Extreme"}
        </IonLabel>
      </IonItem>
    </div>
  );
};

export default Slider;
