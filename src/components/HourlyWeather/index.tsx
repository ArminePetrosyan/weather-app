import { Fragment, type FC } from "react";

import styles from "./HourlyWeather.module.scss";
import { useSelector } from "react-redux";
import { dailyWeather } from "../../redux/selectors";
import { TDailyWeather } from "../../types";

const HourlyWeather: FC = () => {
  const hourlyWeather = useSelector(dailyWeather);

  const hourList = hourlyWeather?.list as TDailyWeather[];

  const hourlyItem = hourList
    ?.slice(0, 4)
    .map(({ dt_txt, id, main, weather }) => {
      const celsius = (main?.temp - 273.15).toFixed(0);

      const icon = weather?.map(({ icon, id }) => (
        <Fragment key={id}>{icon}</Fragment>
      ));

      return (
        <div key={id} className={styles.container__wrapper}>
          <div className={styles.container__wrapper__item}>
            <div className={styles.container__wrapper__item__date}>
              {dt_txt}
            </div>
            <div>{celsius}°C</div>
            <img src={`${icon}.png`} alt="icon" width={20} height={20} />
          </div>
          <div className={styles.container__divider} />
        </div>
      );
    });

  return <div className={styles.container}>{hourlyItem}</div>;
};

export default HourlyWeather;
