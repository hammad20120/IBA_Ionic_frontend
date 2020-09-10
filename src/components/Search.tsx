import React, { useState } from "react";
import {
  IonSearchbar,
} from "@ionic/react";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <div style={{ width: "80%", float: "right" }} className="ion-padding">
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
