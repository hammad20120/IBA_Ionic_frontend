import React, { useEffect, useState } from "react";
import { IonItem, IonList, IonSearchbar } from "@ionic/react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

const SearchLocation: React.FC<{
  setPosition: (p: { lat: number; lng: number }) => void;
}> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [LocationList, setLocationList] = useState<any[]>([]);
  const [FetchDelay, setFetchDelay] = useState(0);
  const [TimeDelay, setTimeDelay] = useState(0);

  useEffect(() => {
    if (TimeDelay !== 0) {
      setTimeDelay(0);
      setTimeout(() => {
        setFetchDelay(0);
      }, FetchDelay);
    }
  }, [searchText]);

  useEffect(() => {
    if (FetchDelay === 0) {
      updateList();
      setTimeDelay(1);
    }
  }, [FetchDelay]);

  const updateList = () => {
    console.log("call");

    fetch(
      `https://api.locationiq.com/v1/autocomplete.php?key=6290f94039d875&q=${searchText}&limit=5&countrycodes=pk`
    )
      .then((res) => res.json())
      .then((res) => res[0] && setLocationList(res));
    setFetchDelay(1000);
  };

  const handleSearchChange = (e: any, values: any) => {
    // console.log(values);

    setSearchText(values);
  };

  const getCordinates = (e: any, values: any) => {
    // console.log(values);
    const locObject = LocationList.find((loc) => values === loc.display_name);
    props.setPosition({
      lat: locObject.lat,
      lng: locObject.lon,
    });
    // console.log({
    //   lat: locObject.lat,
    //   lng: locObject.lng,
    // });
  };

  return (
    <div style={{ color: "black" }} className="ion-padding">
      <p style={{ fontSize: "130%", paddingLeft: "10px" }}>
        Crisis/Resources Location
      </p>

      <Autocomplete
        freeSolo
        value={searchText}
        disableClearable
        options={LocationList.map((option) => option.display_name)}
        onInputChange={handleSearchChange}
        onChange={getCordinates}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Location"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
};

export default SearchLocation;
