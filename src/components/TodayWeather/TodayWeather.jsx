import { useSetLocation } from "context/LocationProvider";
import { clsx } from "clsx";
import s from "./TodayWeather.module.scss";
import IconSelector from "components/IconSelector/IconSelector";
import { formatClockShort } from "utils/formatDate";
import { ReactComponent as Sunrise } from "../../assets/service-icons/sunrise.svg";
import { ReactComponent as Sunset } from "../../assets/service-icons/sunset.svg";

const TodayWeather = () => {
  const { dayWeather } = useSetLocation();
  return (
    <div className={s.weatherContainer}>
      <>
        <IconSelector icon={dayWeather?.weather?.[0]?.main} />
      </>
      <div>
        <p>
          {Math.round(dayWeather?.main?.temp) || null}
          <span className={s.celsius}>&#8451;</span>{" "}
          <span className={s.description}>
            {dayWeather?.weather?.[0]?.description}
          </span>
        </p>
        <div className={clsx(s.flexWrapper, s.minMax)}>
          <div>
            <p>min</p>
            <p>{Math.round(dayWeather?.main?.temp_min) || null}</p>
          </div>
          {"|"}
          <div>
            <p>max</p>
            <p>{Math.round(dayWeather?.main?.temp_max) || null}</p>
          </div>
        </div>
      </div>

      <ul className={clsx(s.flexWrapper, s.sun)}>
        <li>
          {dayWeather?.sys?.sunrise && (
            <div className={s.sunWrapper}>
              <Sunrise className={s.iconWrapper} />
              <span>
                {formatClockShort(new Date(dayWeather?.sys?.sunrise * 1000))}
              </span>
            </div>
          )}
        </li>
        {"|"}
        <li>
          {dayWeather?.sys?.sunset && (
            <div className={s.sunWrapper}>
              <Sunset />
              <span>
                {formatClockShort(new Date(dayWeather?.sys?.sunset * 1000))}
              </span>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TodayWeather;
