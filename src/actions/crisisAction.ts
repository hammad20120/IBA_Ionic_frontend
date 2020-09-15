import { CrisisState } from "../reducers/CrisisReducer";

export type CrisisActionType = {
  type:
    | "UPDATE_POSITION"
    | "UPDATE_LOCATION_NAME"
    | "UPDATE_SEVERITY"
    | "UPDATE_TYPE"
    | "UPDATE_RESOURCES";
  payload: CrisisState;
};

export const updatePosition = (crisis: CrisisState): CrisisActionType => ({
  type: "UPDATE_POSITION",
  payload: { ...crisis, lat: crisis.lat, lng: crisis.lng },
});

export const updateLocationName = (crisis: CrisisState): CrisisActionType => ({
  type: "UPDATE_LOCATION_NAME",
  payload: { ...crisis, location: crisis.location },
});

export const updateSeverity = (crisis: CrisisState): CrisisActionType => ({
  type: "UPDATE_SEVERITY",
  payload: { ...crisis, severity: crisis.severity },
});

export const updateType = (crisis: CrisisState): CrisisActionType => ({
  type: "UPDATE_TYPE",
  payload: { ...crisis, type: crisis.type },
});

export const updateResources = (crisis: CrisisState): CrisisActionType => ({
  type: "UPDATE_RESOURCES",
  payload: { ...crisis, resources: crisis.resources },
});
