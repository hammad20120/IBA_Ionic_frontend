import { IonContent, IonList, IonListHeader, IonMenu } from "@ionic/react";

import React, { useState } from "react";
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
  alertCircleOutline,
  alertCircleSharp,
} from "ionicons/icons";
import "../CSS/Menu.css";
import MenuItem from "./MenuItem";
import SubMenuItem from "./SubMenuItem";

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
  {
    title: "Crisis",
    url: "/page/Crisis",
    iosIcon: alertCircleOutline,
    mdIcon: alertCircleSharp,
    type: "link",
    subPages: [],
  },
];

const Menu: React.FC = () => {
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
                  <MenuItem appPage={appPage} />
                ) : (
                  <SubMenuItem
                    RequestMenuOpen={RequestMenuOpen}
                    setRequestMenuOpen={setRequestMenuOpen}
                    appPage={appPage}
                  />
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
