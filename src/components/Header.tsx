import React from "react";
import {
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonLabel,
} from "@ionic/react";
import { useParams } from "react-router";
import firebase from "firebase";
import SignoutPopover from "../components/SignoutPopover";

const Header: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const user = firebase.auth().currentUser;

  return (
    <>
      <IonToolbar class="bg-class">
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle slot="start">{name}</IonTitle>
        {user && <SignoutPopover />}
        <IonLabel
          slot="end"
          style={{ fontSize: "120%" }}
          className="ion-padding"
        >
          {user != null ? user.displayName?.split(" ")[0] : ""}
        </IonLabel>
      </IonToolbar>
    </>
  );
};

export default Header;
