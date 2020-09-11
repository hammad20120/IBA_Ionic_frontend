import React, { useState } from "react";
import { IonSearchbar } from "@ionic/react";

const SearchLocation: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div style={{ color: "black" }} className="ion-padding">
      <p style={{ fontSize: "130%", paddingLeft: "10px" }}>
        Crisis/Resources Location
      </p>
      <IonSearchbar
        placeholder="Search Location"
        color="black"
        value={searchText}
        onIonChange={(e) => setSearchText(e.detail.value!)}
        showCancelButton="never"
      ></IonSearchbar>
    </div>
  );
};

export default SearchLocation;
