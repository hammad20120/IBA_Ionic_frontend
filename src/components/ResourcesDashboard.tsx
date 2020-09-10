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
  IonIcon,
  IonButton,
  IonSelect,
  IonGrid,
  IonCard,
  IonRippleEffect,
  IonRow,
  IonCol,
} from "@ionic/react";
import { fastFood, medkit, car, man, bonfire, star } from "ionicons/icons";
import "./Resources.css";

interface selectedArray {
  ambulance: boolean;
  food: boolean;
  medical: boolean;
  firetruck: boolean;
  police: boolean;
  rescuevehice: boolean;
}

const ResourcesDashboard: React.FC = () => {
  const [selected, setSelected] = useState<selectedArray>({
    ambulance: false,
    food: false,
    medical: false,
    firetruck: false,
    police: false,
    rescuevehice: false,
  });

  const selectHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value: boolean
  ) => {
    setSelected((prev) => ({
      ...prev,
      [name]: !value,
    }));
  };

  return (
    <div style={{ height: "100%", width: "100%" }} className="ion-padding">
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1 className={"cardHeader"}>Resources</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonCard
                  color="buttons"
                  className={`dashboardbutton ion-activatable ${
                    selected.food ? "selected" : ""
                  }`}
                  onClick={(e: any) => selectHandler(e, "food", selected.food)}
                >
                  <IonRippleEffect></IonRippleEffect>
                  <div>
                    <IonIcon
                      icon={fastFood}
                      className="dashboardicon"
                    ></IonIcon>
                    <br />
                    <br />
                    Food
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem lines="none">
                <IonCard
                  color="buttons"
                  className={`dashboardbutton ion-activatable ${
                    selected.ambulance ? "selected" : ""
                  }`}
                  onClick={(e: any) =>
                    selectHandler(e, "ambulance", selected.ambulance)
                  }
                >
                  <IonRippleEffect></IonRippleEffect>
                  <div>
                    <IonIcon icon={star} className="dashboardicon"></IonIcon>
                    <br />
                    <br />
                    Ambulance
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonCard
                  color="buttons"
                  className={`dashboardbutton ion-activatable ${
                    selected.firetruck ? "selected" : ""
                  }`}
                  onClick={(e: any) =>
                    selectHandler(e, "firetruck", selected.firetruck)
                  }
                >
                  <IonRippleEffect></IonRippleEffect>
                  <div>
                    <IonIcon icon={bonfire} className="dashboardicon"></IonIcon>
                    <br />
                    <br />
                    Fire Truck
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem lines="none">
                <IonCard
                  color="buttons"
                  className={`dashboardbutton ion-activatable ${
                    selected.medical ? "selected" : ""
                  }`}
                  onClick={(e: any) =>
                    selectHandler(e, "medical", selected.medical)
                  }
                >
                  <IonRippleEffect></IonRippleEffect>
                  <div>
                    <IonIcon icon={medkit} className="dashboardicon"></IonIcon>
                    <br />
                    <br />
                    Medical
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonCard
                  color="buttons"
                  className={`dashboardbutton ion-activatable ${
                    selected.rescuevehice ? "selected" : ""
                  }`}
                  onClick={(e: any) =>
                    selectHandler(e, "rescuevehice", selected.rescuevehice)
                  }
                >
                  <IonRippleEffect></IonRippleEffect>
                  <div>
                    <IonIcon icon={man} className="dashboardicon"></IonIcon>
                    <br />
                    <br />
                    Rescue Vehicle
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>

            <IonCol>
              <IonItem lines="none">
                <IonCard
                  color="buttons"
                  className={`dashboardbutton ion-activatable ${
                    selected.police ? "selected" : ""
                  }`}
                  onClick={(e: any) =>
                    selectHandler(e, "police", selected.police)
                  }
                >
                  <IonRippleEffect></IonRippleEffect>
                  <div>
                    <IonIcon icon={car} className="dashboardicon"></IonIcon>
                    <br />
                    <br />
                    Police
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </div>
  );
};

export default ResourcesDashboard;
