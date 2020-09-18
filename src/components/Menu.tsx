import { IonContent, IonList, IonListHeader, IonMenu } from "@ionic/react";

import React, { useState } from "react";
import {
  gridOutline,
  gridSharp,
  checkmarkOutline,
  checkmarkSharp,
  alertCircleOutline,
  alertCircleSharp,
  personCircleOutline,
  listCircle,
  shareSocialOutline
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
    title: "Crisis",
    url: "",
    iosIcon: alertCircleOutline,
    mdIcon: alertCircleSharp,
    type: "submenu",
    subPages: [
      {
        title: "All Crisis",
        url: "/crisislist",
        iosIcon: listCircle,
        mdIcon: listCircle,
      },
      {
        title: "Your Crisis",
        url: "/yourcrisis",
        iosIcon: checkmarkOutline,
        mdIcon: checkmarkSharp,
      },
      {
        title: "Joined Crisis",
        url: "/joincrisislist",
        iosIcon: shareSocialOutline,
        mdIcon: shareSocialOutline,
      },
    ],
  },
  
  {
    title: "Profile",
    url: "/profile",
    iosIcon: personCircleOutline,
    mdIcon: personCircleOutline,
    type: "link",
    subPages: [],
  }
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
