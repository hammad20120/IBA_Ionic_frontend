import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonButton,
} from "@ionic/react";
import Header from "./Header";
import firebase from "firebase";
import ResourcesCrisisDetails from "./ResourcesCrisisDetails";
import MapCrisisDetails from "./MapCrisisDetails";
import "../CSS/JoinCrisis.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { toast } from "../firebaseConfig/toast";
interface IDMatchProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const JoinCrisis: React.FC<IDMatchProps> = ({ match }) => {
  var [crisisObjects, setCrisisObjects] = useState<any>("");
  const [RenderMap, setRenderMap] = useState<boolean>(false);
  const [resources, setResourceList] = useState<string[]>([]);
  const [ResourcesToBeAdded, setResourcesToBeAdded] = useState<string[]>([]);
  var [userObjects, setUserObject] = useState<any>("");
  var user = firebase.auth().currentUser;
  var user_id = user != null ? user.uid : "";

  var [usersInfo, setUsersInfo] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => setRenderMap(true), 700);

    firebase
      .database()
      .ref(`crisis/` + match.params.id)
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setCrisisObjects({
            ...snapshot.val(),
          });
        }
      });

    firebase
      .database()
      .ref(`users/` + user_id)
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          snapshot.forEach(function (childNodes) {
            setUserObject({
              ...childNodes.val(),
            });
          });
        }
      });
  }, []);

  useEffect(() => {
    ResourcesToBeAdded.length > 0 &&
      firebase
        .database()
        .ref("crisis/" + match.params.id)
        .child("resources")
        .update([...crisisObjects.resources, ...ResourcesToBeAdded]);
  }, [ResourcesToBeAdded]);

  //id and resources added to crisis table and crisis id added to user table
  const onJoinCrisis = () => {
    setResourcesToBeAdded(
      resources.filter((item) => crisisObjects.resources.indexOf(item) === -1)
    );
       
          crisisObjects.Joined_Users.indexOf(user_id) === -1 &&
            firebase
              .database()
              .ref("crisis/" + match.params.id)
              .child("Joined_Users")
              .update([...crisisObjects.Joined_Users, user_id]);

          userObjects.Joined_Crisis.indexOf(match.params.id) === -1 &&
            firebase
              .database()
              .ref("users/" + user_id)
              .child("Joined_Crisis")
              .update([...userObjects.Joined_Crisis, match.params.id]);

          toast("Crisis Joined Successfully");
        
  
  };

  useEffect(() => {
    firebase
      .database()
      .ref(`crisis/` + match.params.id)
      .child("Joined_Users")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          var keys = snapshot.val();

          if (keys) {
            var promises = keys.map((key: any) => {
              return firebase.database().ref("users").child(key).once("value");
            });

            Promise.all(promises).then(function (snapshots) {
              snapshots.forEach((snapshot: any) => {
                setUsersInfo((user: any) => [...user, snapshot.val()]);
              });
            });
          }
        }
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent class="bg" className="ion-padding">
        <IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCardHeader className="ion-text-center">
                  <h3 style={{ color: "black", fontSize: "150%" }}>
                    Crisis Location (MAP)
                  </h3>
                </IonCardHeader>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12">
                <IonItem lines="none">
                  {RenderMap && crisisObjects && (
                    <MapCrisisDetails
                      lat={crisisObjects.lat}
                      lng={crisisObjects.lng}
                    />
                  )}
                </IonItem>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
        <IonCard>
          <IonGrid>
            <IonCardContent style={{ color: "black", fontSize: "1.0rem" }}>
              <IonRow>
                <IonCol>
                  <IonCardHeader className="ion-text-center">
                    <h3 style={{ color: "black", fontSize: "150%" }}>
                      Crisis Info
                    </h3>
                  </IonCardHeader>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>User Name: </IonLabel>
                  <IonLabel>{crisisObjects.createdBy}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Crisis Type: </IonLabel>
                  <IonLabel>{crisisObjects.type}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Crisis Severity: </IonLabel>
                  <IonLabel>{crisisObjects.severity}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Status: </IonLabel>
                  <IonLabel>{crisisObjects.status}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Resources: </IonLabel>
                  <IonLabel>{" " + crisisObjects.resources}</IonLabel>
                </IonCol>
                <IonCol size="12" offset-sm="1" size-sm="5">
                  <IonLabel>Created At: </IonLabel>
                  <IonLabel>{crisisObjects.Created_At}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="6">
                  <IonLabel>Address: </IonLabel>
                  <IonLabel>{crisisObjects.location}</IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonCardHeader className="ion-text-center">
                    <h3 style={{ color: "black", fontSize: "150%" }}>
                      Users Joined
                    </h3>
                  </IonCardHeader>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="12" offset-sm="1" size-sm="10">
                  <TableContainer component={Paper}>
                    <Table style={{ color: "#000" }}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Contact</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>City</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {usersInfo.map((key: any) => (
                          <TableRow>
                            <TableCell>{key.username}</TableCell>
                            <TableCell>{key.contact}</TableCell>
                            <TableCell>{key.email}</TableCell>
                            <TableCell>{key.city}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonGrid>
        </IonCard>
        {crisisObjects && crisisObjects.Joined_Users.indexOf(user_id) === -1 && (
        <IonCard className="second-card">
          <ResourcesCrisisDetails setResourceList={setResourceList} />
        </IonCard>
              )}
        {crisisObjects && crisisObjects.Joined_Users.indexOf(user_id) === -1 && (
          <IonButton
            style={{
              float: "right",
              marginRight: "25px",
              marginBottom: "35px",
            }}
            color="themecolor"
            className="ion=padding"
            onClick={onJoinCrisis}
          >
            Join Crisis
          </IonButton>
        )}
      </IonContent>
    </IonPage>
  );
};

export default JoinCrisis;
