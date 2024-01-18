export type TCurrentWeather = {
  weather?: TWeather[];
  name?: string;
  temp?: number;
};

export type TWeather = {
  icon?: string;
  description?: string;
  main?: string;
  id?: number;
};
