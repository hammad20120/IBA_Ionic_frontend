import React from "react";
import { IonItem, IonIcon, IonLabel, IonMenuToggle } from "@ionic/react";
import { useLocation } from "react-router";
import "./SubMenuItem.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  type: "submenu" | "link";
  subPages: { title: string; url: string; iosIcon: string; mdIcon: string }[];
}

const SubMenuItem: React.FC<{
  appPage: AppPage;
  RequestMenuOpen: Boolean;
  setRequestMenuOpen: (x: Boolean) => void;
}> = (props) => {
  const location = useLocation();
  return (
    <>
      <IonItem
        button
        onClick={() => props.setRequestMenuOpen(!props.RequestMenuOpen)}
        lines="none"
      >
        <IonIcon
          slot="start"
          ios={props.appPage.iosIcon}
          md={props.appPage.mdIcon}
        />
        <IonLabel>{props.appPage.title}</IonLabel>
      </IonItem>
      {props.RequestMenuOpen &&
        props.appPage.subPages.map((subPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === subPage.url ? "selected" : ""}
                routerLink={subPage.url}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonIcon
                  className="submenuIcon"
                  slot="start"
                  ios={subPage.iosIcon}
                  md={subPage.mdIcon}
                />
                <IonLabel>{subPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
    </>
  );
};

export default SubMenuItem;
