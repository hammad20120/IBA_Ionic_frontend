/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IonItem, IonRange, IonLabel } from "@ionic/react";
import "../CSS/Slider.css";
import { useDispatch, useSelector } from "react-redux";
import { CrisisState } from "../reducers/CrisisReducer";
import { RootState } from "../store";
import { updateSeverity } from "../actions/crisisAction";

export const Slider: React.FC = () => {
  const [RangeValue, setRangeValue] = useState(0);
  const [RangeColor, setRangeColor] = useState<string>("yellow");
  const [Severity, setSeverity] = useState<string>("Low");

  const Crisis = useSelector<RootState, CrisisState>((state) => state.crisis);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSeverity({ ...Crisis, severity: Severity }));
  }, [Severity]);

  const onRangeChangeHandler = (e: any) => {
    setRangeValue(e.detail.value as number);
    const sliderVal: number = e.detail.value as number;

    if (sliderVal < 25) {
      setRangeColor("yellow");
      setSeverity("Low");
    } else if (sliderVal < 50) {
      setRangeColor("orange");
      setSeverity("Medium");
    } else if (sliderVal < 75) {
      setRangeColor("vividorange");
      setSeverity("High");
    } else {
      setRangeColor("danger");
      setSeverity("Extreme");
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
          value={RangeValue}
          step={25}
          onIonChange={onRangeChangeHandler}
          color={RangeColor}
          snaps
        />
      </IonItem>
      <IonItem lines="none">
        <IonLabel style={{ fontSize: "110%" }}>
          Severity:
          {` ${Severity}`}
        </IonLabel>
      </IonItem>
    </div>
  );
};

export default Slider;
