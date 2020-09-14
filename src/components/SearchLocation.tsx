/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { updatePosition, updateLocationName } from "../actions/crisisAction";
import { CrisisState } from "../reducers/CrisisReducer";

const SearchLocation: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [LocationList, setLocationList] = useState<any[]>([]);
  const [FetchDelay, setFetchDelay] = useState(0);
  const [TimeDelay, setTimeDelay] = useState(0);

  const Crisis = useSelector<RootState, CrisisState>((state) => state.crisis);
  const dispatch = useDispatch();

  /* Update Search Location Text Field When Position Change */

  useEffect(() => {
    console.log("CHECK");
    Crisis.lat &&
      fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=6290f94039d875&lat=${Crisis.lat}&lon=${Crisis.lng}&format=json`
      )
        .then((res) => res.json())
        .then((res) => setSearchText(res.display_name));
  }, [Crisis.lat]);

  /* Control API Calls */

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

  /* Fetch Location Suggestions from API */

  const updateList = () => {
    console.log(searchText);

    console.log("call");

    fetch(
      `https://api.locationiq.com/v1/autocomplete.php?key=6290f94039d875&q=${searchText}&limit=5&countrycodes=pk`
    )
      .then((res) => res.json())
      .then((res) => res[0] && setLocationList(res));

    setFetchDelay(1000);
  };

  const handleSearchChange = (e: any, values: any) => {
    setSearchText(values);
    dispatch(updateLocationName({ ...Crisis, location: searchText }));
  };

  const getCordinates = (e: any, values: any) => {
    const locObject = LocationList.find((loc) => values === loc.display_name);

    dispatch(
      updatePosition({ ...Crisis, lat: locObject.lat, lng: locObject.lon })
    );
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
