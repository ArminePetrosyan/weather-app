import type { FC } from "react";

import { currentWeather } from "../../redux/selectors";
import CurrentWeather from "../CurrentWeather";
import HourlyWeather from "../HourlyWeather";
import { useSelector } from "react-redux";

import styles from "./WeatherComponent.module.scss";

const WeatherComponent: FC = () => {
  const weather = useSelector(currentWeather);
  const celsius = (weather?.main?.temp_max - 273.15).toFixed(0);

  return (
    <div className={styles.container}>
      <CurrentWeather
        weather={weather?.weather}
        name={weather?.name}
        temp={Number(celsius)}
      />
      <HourlyWeather />
    </div>
  );
};

export default WeatherComponent;
