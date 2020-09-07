import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  gridOutline,
  gridSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  refreshOutline,
  refreshSharp,
  checkmarkOutline,
  checkmarkSharp,
  checkmarkDoneOutline,
  checkmarkDoneSharp,
  carOutline,
  carSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  type: "submenu" | "link";
  subPages: { title: string; url: string; iosIcon: string; mdIcon: string }[];
}

const appPages: AppPage[] = [
  {
    title: "Dashboard",
    url: "/page/Dashboard",
    iosIcon: gridOutline,
    mdIcon: gridSharp,
    type: "link",
    subPages: [],
  },
  {
    title: "Requests",
    url: "",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    type: "submenu",
    subPages: [
      {
        title: "Pending",
        url: "/page/Pending",
        iosIcon: refreshOutline,
        mdIcon: refreshSharp,
      },
      {
        title: "Approved",
        url: "/page/Approved",
        iosIcon: checkmarkOutline,
        mdIcon: checkmarkSharp,
      },
      {
        title: "Dispatched",
        url: "/page/Dispatched",
        iosIcon: carOutline,
        mdIcon: carSharp,
      },
      {
        title: "Completed",
        url: "/page/Completed",
        iosIcon: checkmarkDoneOutline,
        mdIcon: checkmarkDoneSharp,
      },
    ],
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  const [RequestMenuOpen, setRequestMenuOpen] = useState<Boolean>(false);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="menu-list">
          <IonListHeader>Menu</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <React.Fragment key={index}>
                {appPage.type === "link" ? (
                  <IonMenuToggle autoHide={false}>
                    <IonItem
                      className={
                        location.pathname === appPage.url ? "selected" : ""
                      }
                      routerLink={appPage.url}
                      routerDirection="none"
                      lines="none"
                      detail={false}
                    >
                      <IonIcon
                        slot="start"
                        ios={appPage.iosIcon}
                        md={appPage.mdIcon}
                      />
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                  </IonMenuToggle>
                ) : (
                  <>
                    <IonItem
                      key={index}
                      button
                      onClick={() => setRequestMenuOpen(!RequestMenuOpen)}
                    >
                      <IonIcon
                        slot="start"
                        ios={appPage.iosIcon}
                        md={appPage.mdIcon}
                      />
                      <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                    {RequestMenuOpen &&
                      appPage.subPages.map((subPage, index) => {
                        return (
                          <IonMenuToggle key={index} autoHide={false}>
                            <IonItem
                              className={
                                location.pathname === subPage.url
                                  ? "selected"
                                  : ""
                              }
                              routerLink={subPage.url}
                              routerDirection="none"
                              lines="none"
                              detail={false}
                            >
                              <IonIcon
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
                )}
              </React.Fragment>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
