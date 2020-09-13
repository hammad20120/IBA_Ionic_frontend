import { PositionActionType } from "../actions/positionAction";

export interface PositionState {
  lat: number;
  lng: number;
}

const initState: PositionState = {
  lat: 24.9462569,
  lng: 67.0203426,
};

export const positionReducer = (
  state: PositionState = initState,
  action: PositionActionType
) => {
  switch (action.type) {
    case "UPDATE_POSITION": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
