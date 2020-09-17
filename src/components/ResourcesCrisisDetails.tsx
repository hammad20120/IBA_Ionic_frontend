import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonRippleEffect,
  IonRow,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { fastFood, medkit, car, man, bonfire, star } from "ionicons/icons";

interface selectedArray {
  ambulance: boolean;
  food: boolean;
  medical: boolean;
  firetruck: boolean;
  police: boolean;
  rescuevehice: boolean;
}

type resourceList =
  | "ambulance"
  | "food"
  | "medical"
  | "firetruck"
  | "police"
  | "rescuevehice";

const resIcon = {
  ambulance: star,
  food: fastFood,
  medical: medkit,
  firetruck: bonfire,
  police: car,
  rescuevehice: man,
};

const allResources: resourceList[] = [
  "ambulance",
  "food",
  "medical",
  "firetruck",
  "police",
  "rescuevehice",
];

const ResourcesCrisisDetails: React.FC<{
  setResourceList: (a: string[]) => void;
}> = ({ setResourceList }) => {
  const [resourcesArray, setResourcesArray] = useState<string[]>([]);
  const [selected, setSelected] = useState<selectedArray>({
    ambulance: false,
    food: false,
    medical: false,
    firetruck: false,
    police: false,
    rescuevehice: false,
  });

  useEffect(() => {
    setResourceList(resourcesArray);
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
  console.log(selected["ambulance"]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1 style={{ textAlign: "center" }}>Resources</h1>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            {allResources.map((resource, index) => {
              return (
                <>
                  <IonCol size="6" className="ion-align-self-center">
                    <IonItem lines="none">
                      <IonCard
                        color="buttons"
                        className={`dashboardbutton ion-activatable ${
                          selected[resource] ? "selected" : ""
                        }`}
                        onClick={(e: any) =>
                          selectHandler(e, resource, selected[resource])
                        }
                      >
                        <IonRippleEffect></IonRippleEffect>
                        <div>
                          <div className="iconHolder">
                            <IonIcon
                              icon={resIcon[resource]}
                              className="dashboardicon"
                            ></IonIcon>
                          </div>
                          <br />
                          {resource}
                        </div>
                      </IonCard>
                    </IonItem>
                  </IonCol>
                </>
              );
            })}
          </IonRow>
        </IonGrid>
      </IonContent>
    </div>
  );
};

export default ResourcesCrisisDetails;
