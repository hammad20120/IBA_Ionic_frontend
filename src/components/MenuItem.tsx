import React from "react";
import { IonMenuToggle, IonItem, IonIcon, IonLabel } from "@ionic/react";
import { useLocation } from "react-router";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  type: "submenu" | "link";
  subPages: { title: string; url: string; iosIcon: string; mdIcon: string }[];
}

const MenuItem: React.FC<{ appPage: AppPage }> = (props) => {
  const location = useLocation();
  return (
    <IonMenuToggle autoHide={false}>
      <IonItem
        className={location.pathname === props.appPage.url ? "selected" : ""}
        routerLink={props.appPage.url}
        routerDirection="none"
        lines="none"
        detail={false}
      >
        <IonIcon
          slot="start"
          ios={props.appPage.iosIcon}
          md={props.appPage.mdIcon}
        />
        <IonLabel>{props.appPage.title}</IonLabel>
      </IonItem>
    </IonMenuToggle>
  );
};

export default MenuItem;
