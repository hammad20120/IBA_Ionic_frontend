import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { IonContent, IonHeader, IonPage } from "@ionic/react";
import Header from "../components/Header";

const CrisisList: React.FC = () => {
  var [crisisObjects, setCrisisObjects] = useState<any>("");

  useEffect(() => {
    firebase
      .database()
      .ref("crisis")
      .on("value", (snapshot) => {
        if (snapshot.val() != null) {
          setCrisisObjects({
            ...snapshot.val(),
          });
        }
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <Header />
      </IonHeader>
      <IonContent class="bg">
        <table>
          <thead>
            <tr>
              <td>a</td>
              <td>b</td>
              <td>x</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(crisisObjects).map((key) => (
              <tr key={key}>
                <td>{crisisObjects[key].createdBy}</td>
                <td>{crisisObjects[key].type}</td>
                <td>{crisisObjects[key].severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </IonContent>
    </IonPage>
  );
};

export default CrisisList;
