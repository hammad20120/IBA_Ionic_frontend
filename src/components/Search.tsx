import React, { useEffect, useState } from "react";
import { IonItem, IonList, IonSearchbar } from "@ionic/react";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="ion-padding">
      <IonSearchbar
        color="black"
        placeholder="Search Resources/Crisis"
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        showCancelButton="never"
      ></IonSearchbar>
    </div>
  );
};

export default Search;
