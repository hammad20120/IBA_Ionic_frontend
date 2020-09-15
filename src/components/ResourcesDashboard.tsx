/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonItem,
  IonIcon,
  IonGrid,
  IonCard,
  IonRippleEffect,
  IonRow,
  IonCol,
} from "@ionic/react";
import { fastFood, medkit, car, man, bonfire, star } from "ionicons/icons";
import "../CSS/Resources.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { CrisisState } from "../reducers/CrisisReducer";
import { updateResources } from "../actions/crisisAction";

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

  const [resourcesArray, setResourcesArray] = useState<string[]>([]);
  const dispatch = useDispatch();
  const crisis = useSelector<RootState, CrisisState>((state) => state.crisis);

  useEffect(() => {
    dispatch(updateResources({ ...crisis, resources: resourcesArray }));
  }, [resourcesArray]);

  const selectHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string,
    value: boolean
  ) => {
    setSelected((prev) => ({
      ...prev,
      [name]: !value,
    }));

    if (value) {
      setResourcesArray([
        ...resourcesArray.slice(0, resourcesArray.indexOf(name)),
        ...resourcesArray.slice(resourcesArray.indexOf(name) + 1),
      ]);
    } else {
      setResourcesArray((res) => [...res, name]);
    }
  };

  return (
    <div style={{ height: "100%", width: "100%" }} className="ion-padding">
      <IonContent>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>
              <h1 className={"cardHeader"}>Resources</h1>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
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
                    <div className="iconHolder">
                      <IonIcon
                        icon={fastFood}
                        className="dashboardicon"
                      ></IonIcon>
                    </div>
                    <br />
                    Food
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>

            <IonCol size="6">
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
                    <div className="iconHolder">
                      <IonIcon icon={star} className="dashboardicon"></IonIcon>
                    </div>
                    <br />
                    Ambulance
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
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
                    <div className="iconHolder">
                      <IonIcon
                        icon={bonfire}
                        className="dashboardicon"
                      ></IonIcon>
                    </div>
                    <br />
                    Fire Truck
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>

            <IonCol size="6">
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
                    <div className="iconHolder">
                      <IonIcon
                        icon={medkit}
                        className="dashboardicon"
                      ></IonIcon>
                    </div>
                    <br />
                    Medical
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="6">
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
                    <div className="iconHolder">
                      <IonIcon icon={man} className="dashboardicon"></IonIcon>
                    </div>
                    <br />
                    Rescue Vehicle
                  </div>
                </IonCard>
              </IonItem>
            </IonCol>

            <IonCol size="6">
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
                    <div className="iconHolder">
                      <IonIcon icon={car} className="dashboardicon"></IonIcon>
                    </div>
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
