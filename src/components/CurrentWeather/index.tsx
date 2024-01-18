import { Fragment, type FC } from "react";

import styles from "./CurrentWeather.module.scss";
import { TCurrentWeather } from "./types";

const CurrentWeather: FC<TCurrentWeather> = ({ weather, name, temp }) => {
  const descriptionPow = weather?.map(({ icon, description, id, main }) => {
    return (
      <Fragment key={id}>
        <div className={styles.container__current}>
          <img src={`${icon}.png`} alt={description} width={40} height={40} />
          <p>{main}</p>
        </div>
      </Fragment>
    );
  });

  return (
    <div className={styles.container}>
      <p className={styles.container__text}>{name}</p>
      <p className={styles.container__text}>{temp}°C</p>
      {descriptionPow}
    </div>
  );
};

export default CurrentWeather;
