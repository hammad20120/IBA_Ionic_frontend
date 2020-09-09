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

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState("Search Resources/Crisis");
  return (
    <div style={{ width: "80%", float:"right"}} className="ion-padding">
      {/*<p>Default Searchbar</p> */}
      <IonSearchbar
        color="black"
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        showCancelButton="never"
        >
      </IonSearchbar>
    
    </div>
  );
};

export default Search;
