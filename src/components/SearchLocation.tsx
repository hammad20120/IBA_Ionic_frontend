import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonFooter,
} from "@ionic/react";

const SearchLocation: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div style={{ color: "black", width: "40%"}} className="ion-padding">
     <p style={{ fontSize: "130%" , paddingLeft:"10px"}} >Crisis/Resources Location</p>
      <IonSearchbar
        placeholder="Search Location"
        color="black"
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        showCancelButton="never"
        >
      </IonSearchbar>
    
    </div>
  );
};

export default SearchLocation;
