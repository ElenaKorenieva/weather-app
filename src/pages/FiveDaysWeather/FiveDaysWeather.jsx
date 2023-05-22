import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getFiveDaysWeather } from "services/apiCurrentWeather";
import WeatherItem from "components/WeatherItem/WeatherItem";
import Location from "../../components/Location/Location";
import { useSetLocation } from "context/LocationProvider";

const FiveDaysWeather = () => {
  const { city, location } = useSetLocation();
  const [weatherFiveDays, setWeatherFiveDays] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.lat && location.lon) {
      getFiveDays();
    }
    async function getFiveDays() {
      try {
        const data = await getFiveDaysWeather(location);
        setWeatherFiveDays(data);
      } catch (error) {
        setError(error.message);
      }
    }
  }, [location]);

  return (
    <>
      {city && (
        <Location city={city} country={weatherFiveDays?.city?.country} />
      )}

      <WeatherItem weatherFiveDays={weatherFiveDays?.list} />
      <Outlet />
    </>
  );
};

export default FiveDaysWeather;
