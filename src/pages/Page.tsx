import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonRow,
  IonGrid,
  IonCol,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "../CSS/Page.css";
import ResourcesDashboard from "../components/ResourcesDashboard";
import Alerts from "../components/Alerts";
import SearchLocation from "../components/SearchLocation";
import Slider from "../components/Slider";
import CrisisDropdown from "../components/CrisisDropdown";
import MapLeaflet from "../components/Map";
import { logOut } from "ionicons/icons";
import { signout } from "../firebaseConfig/firebaseConfig";
import firebase from "firebase";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const [RenderMap, setRenderMap] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setRenderMap(true), 700);
  }, []);

  const user = firebase.auth().currentUser;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="bg-class">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle slot="start">{name}</IonTitle>
          {user !== null ? (
            <IonIcon
              icon={logOut}
              style={{ fontSize: "140%" }}
              onClick={signout}
              slot="end"
            />
          ) : (
            ""
          )}
          <IonLabel
            slot="end"
            style={{ fontSize: "120%" }}
            className="ion-padding"
          >
            {user != null ? user.displayName : ""}
          </IonLabel>
        </IonToolbar>
      </IonHeader>

      <IonContent class="bg">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <IonCardHeader className="ion-text-center">
                        <h3 style={{ color: "black", fontSize: "200%" }}>
                          Nearby Crisis Location (MAP)
                        </h3>
                      </IonCardHeader>
                    </IonCol>
                  </IonRow>

                  <IonCardContent>
                    <IonRow>
                      <IonCol size="12" size-sm="5">
                        <SearchLocation />

                        <CrisisDropdown />

                        <Slider />
                      </IonCol>

                      <IonCol size="12" size-sm="7">
                        {RenderMap && <MapLeaflet />}
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonGrid>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" size-sm="6">
              <IonCard className="third-card">
                <Alerts />
              </IonCard>
            </IonCol>

            <IonCol size="12" size-sm="6">
              <IonCard className="second-card">
                <ResourcesDashboard />
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonButton
          style={{ float: "right", marginRight: "37px", marginBottom: "35px" }}
          color="high1"
        >
          Clear
        </IonButton>
        <IonButton
          style={{ float: "right", marginRight: "25px", marginBottom: "35px" }}
          color="themecolor"
        >
          Create
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
