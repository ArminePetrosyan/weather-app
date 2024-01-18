export type TCurrentWeather = {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  name: string;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: TWeather[];
  wind: {
    speed: number;
    deg: number;
  };
};

export type TWeather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type TDailyWeather = {
  dt_txt: string;
  id: number;
  weather: {
    id: number;
    icon: string;
  }[];
  main: {
    temp: number;
  };
};

export type State = {
  currentWeather: TCurrentWeather | null;
  dailyWeather?: TDailyWeather[] | null;
};
export type ResponseTypes = {};
