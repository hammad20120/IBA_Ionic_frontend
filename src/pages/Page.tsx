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
import Header from "../components/Header";
import Slider from "../components/Slider";
import CrisisDropdown from "../components/CrisisDropdown";
import MapLeaflet from "../components/Map";

import firebase from "firebase";

import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CrisisState } from "../reducers/CrisisReducer";


const Page: React.FC = () => {
  

  const [RenderMap, setRenderMap] = useState<boolean>(false);
  const Crisis = useSelector<RootState, CrisisState>((state) => state.crisis);
  const user = firebase.auth().currentUser;

  const onCrisisCreate = () => {
    var user_id =  user?.uid;
    var createdBy = user?.displayName;
    var today = new Date();
    var created_At = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate() +
    " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

   firebase.database().ref("crisis").push({...Crisis, user_id, createdBy, created_At });

  };

  useEffect(() => {
    setTimeout(() => setRenderMap(true), 700);
  }, []);



  return (
    <IonPage>
    
    <IonHeader>
      <Header />
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
          style={{ float: "right", marginRight: "25px", marginBottom: "35px" }}
          color="themecolor"
          onClick={onCrisisCreate}
        >
          Create
        </IonButton>

        <IonButton
          style={{ float: "right", marginRight: "37px", marginBottom: "35px" }}
          color="high1"
        
        >
          Clear
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
