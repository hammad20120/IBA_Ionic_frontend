import React, { useState } from 'react';
import { IonPopover, IonIcon } from '@ionic/react';
import { logOut } from "ionicons/icons";

import { signout } from "../firebaseConfig/firebaseConfig";
 const SignoutPopover: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <IonPopover
        isOpen={showPopover}
        cssClass='my-custom-class'
        onDidDismiss={e => setShowPopover(false)}
      >
        <p onClick={signout} style={{textAlign: "center"}}>Sign Out</p>
      </IonPopover>
      <IonIcon
              icon={logOut}
              style={{ fontSize: "140%" }}
              onClick={() => setShowPopover(true)}
              slot="end"
            />
    </>
  );
};

export default SignoutPopover;