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
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import "./Page.css";
import ResourcesDashboard from "../components/ResourcesDashboard";
import Alerts from "../components/Alerts";
import Map from "../components/Map";
import Search from "../components/Search";
import SearchLocation from "../components/SearchLocation";
import Slider from "../components/Slider";
import CrisisDropdown from "../components/CrisisDropdown";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="bg-class">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle slot="start">{name}</IonTitle>
          <Search />
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
                        <div
                          style={{
                            // width: "60%",
                            height: "70vh",
                          }}
                          className="ion-padding"
                        >
                          <Map
                            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBwTTqHEnOff6WlFNHwdQwBBLjEA4a-DLI&v=3.exp&libraries=geometry,drawing,places"
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={
                              <div style={{ height: `100%` }} />
                            }
                            mapElement={<div style={{ height: `100%` }} />}
                          />
                        </div>
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
