interface State {
  currentWeather: any;
  dailyWeather: any;
}

export const currentWeather = (state: State) => state.currentWeather;
export const dailyWeather = (state: State) => state.dailyWeather;
