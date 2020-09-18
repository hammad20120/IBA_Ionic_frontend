import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import Header from "../components/Header";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const YourCrisisList: React.FC = () => {
  var [crisisObjects, setCrisisObjects] = useState<any>("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .database()
          .ref("crisis")
          .orderByChild("user_id")
          .equalTo(user.uid)
          .on("value", (snapshot) => {
            if (snapshot.val() != null) {
              setCrisisObjects({
                ...snapshot.val(),
              });
            }
          });
      }
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent class="bg" className="ion-padding">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Created By</TableCell>
                <TableCell>Crisis Type</TableCell>
                <TableCell>Crisis Severity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>View/Join Crisis</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(crisisObjects).map((key) => (
                <TableRow>
                  <TableCell>{crisisObjects[key].createdBy}</TableCell>
                  <TableCell>{crisisObjects[key].type}</TableCell>
                  <TableCell>{crisisObjects[key].severity}</TableCell>
                  <TableCell>{crisisObjects[key].status}</TableCell>

                  <TableCell>
                    <a
                      href={"/crisisdetails/" + key}
                      style={{ textDecoration: "none" }}
                    >
                      View Details
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </IonContent>
    </IonPage>
  );
};

export default YourCrisisList;
