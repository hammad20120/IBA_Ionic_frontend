import { CrisisActionType } from "../actions/crisisAction";

export interface CrisisState {
  location: string;
  type: string;
  lat: number;
  lng: number;
  severity: string;
  resources: string[];
  createdBy: string;
}

const initState: CrisisState = {
  location: "",
  lat: 24.9462569,
  lng: 67.0203426,
  type: "",
  severity: "Low",
  createdBy: "",
  resources: [],
};

export const crisisReducer = (
  state: CrisisState = initState,
  action: CrisisActionType
) => {
  switch (action.type) {
    case "UPDATE_POSITION":
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng,
      };

    case "UPDATE_LOCATION_NAME":
      return {
        ...state,
        location: action.payload.location,
      };

    case "UPDATE_SEVERITY":
      return {
        ...state,
        severity: action.payload.severity,
      };

    case "UPDATE_TYPE":
      return {
        ...state,
        type: action.payload.type,
      };

    case "UPDATE_RESOURCES":
      return {
        ...state,
        resources: action.payload.resources,
      };

    case "CLEAR_CRISIS":
      return {
        ...state,
        type: "",
        severity: "Low",
        createdBy: "",
        resources: [],
      };

    default:
      return state;
  }
};
