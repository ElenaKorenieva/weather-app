import { useSetLocation } from "context/LocationProvider";
import s from "./Location.module.scss";

const Location = () => {
  const { city, dayWeather } = useSetLocation();

  const cityCapitalize = city[0].toUpperCase() + city.slice(1);
  return (
    <div className={s.locationWrapper}>
      <h2>{`${cityCapitalize}, `}</h2>
      <h1>{dayWeather?.sys?.country}</h1>
    </div>
  );
};

export default Location;
