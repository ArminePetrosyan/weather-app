import { AnyAction } from "redux";
import { GET_CURRENT_WEATHER, GET_DAILY_WEATHER } from "../actions";
import { State } from "../../types";

const initialState: State = {
  currentWeather: null,
  dailyWeather: null,
};

const MainReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case GET_CURRENT_WEATHER: {
      return {
        ...state,
        currentWeather: payload,
      };
    }

    case GET_DAILY_WEATHER: {
      return {
        ...state,
        dailyWeather: payload,
      };
    }
    default:
      return state;
  }
};
export default MainReducer;
