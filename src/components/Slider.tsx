import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonRange, IonLabel, IonIcon, IonItemDivider } from '@ionic/react';
import { sunny } from 'ionicons/icons';
import { RangeValue } from '@ionic/core';

export const Slider: React.FC = () => {

  const [value, setValue] = useState(0);
  return (
    <div style={{ color: "black", width: "40%" , marginTop:"50px"}} className="ion-padding">
       <p style={{ fontSize: "130%" , paddingLeft:"10px"}} >Crisis Severity</p>
          
          <IonItem lines="none">
            <IonRange  value={value} step={25} onIonChange={e => setValue(e.detail.value as number)} color="light" />
          </IonItem>
          <IonItem    lines="none">
            <IonLabel>Severity: {value <= 25 ? "Low" : value > 25 && value <=50 ? "Medium"  : value > 55 && value <=75 ? "High" : "Extreme"}</IonLabel>
          </IonItem>
      </div>
 
  );
};

export default Slider;