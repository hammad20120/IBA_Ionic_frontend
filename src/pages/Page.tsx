import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonRow,
  IonGrid,
  IonCol,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "../CSS/Page.css";
import ResourcesDashboard from "../components/ResourcesDashboard";
import Alerts from "../components/Alerts";
import SearchLocation from "../components/SearchLocation";
import Header from "../components/Header";
import Slider from "../components/Slider";
import CrisisDropdown from "../components/CrisisDropdown";
import MapLeaflet from "../components/MapDashboard";

import { clearCrisis } from "../actions/crisisAction";

import firebase from "firebase";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { CrisisState } from "../reducers/CrisisReducer";
import { Created_At, toast } from "../firebaseConfig/toast";

const Page: React.FC = () => {
  const [RenderMap, setRenderMap] = useState<boolean>(false);

  const Crisis = useSelector<RootState, CrisisState>((state) => state.crisis);
  const dispatch = useDispatch();

  const user = firebase.auth().currentUser;

  const onCrisisCreate = () => {
    var user_id = user?.uid;
    var createdBy = user?.displayName;
    var status = "Pending";

    firebase
      .database()
      .ref("crisis")
      .push({ ...Crisis, user_id, createdBy, Created_At, status })
      .child("Joined_Users")
      .set([user_id])
      .then(() => {
        toast("Crisis Created Successfully");
      });
  };

  const onCrisisClear = () => {
    dispatch(clearCrisis(Crisis));
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
          onClick={onCrisisClear}
        >
          Clear
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page;
