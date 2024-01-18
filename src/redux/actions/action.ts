import axios from "axios";

import { AppDispatch } from "../store/store";

export const GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER";
export const GET_DAILY_WEATHER = "GET_DAILY_WEATHER";

export const getCurrentWeather = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Yerevan&appid=123c6ba5f53c7bccbee2347498154c29`
    );
    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getDailyWeather = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&appid=123c6ba5f53c7bccbee2347498154c29`
    );
    dispatch({
      type: GET_DAILY_WEATHER,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
