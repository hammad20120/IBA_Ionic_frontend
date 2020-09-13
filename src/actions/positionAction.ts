import { PositionState } from "../reducers/PositionReducer";

export type PositionActionType = {
  type: "UPDATE_POSITION";
  payload: PositionState;
};

export const updatePosition = (
  position: PositionState
): PositionActionType => ({
  type: "UPDATE_POSITION",
  payload: position,
});
