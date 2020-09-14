import React, { useState, useEffect } from "react";
import firebase from "firebase";
import {IonHeader } from "@ionic/react";
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

    <div>
      <IonHeader>
      <Header />
    </IonHeader>
      
          {Object.keys(crisisObjects).map((key) => (
            <tr key={key}>
              <td>{crisisObjects[key].createdBy}</td>
              <td>{crisisObjects[key].type}</td>
              <td>{crisisObjects[key].severity}</td>
            </tr>
          ))}
        
    </div>
  );
};

export default CrisisList;
