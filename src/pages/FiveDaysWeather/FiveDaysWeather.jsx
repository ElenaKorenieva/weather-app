import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { getFiveDaysWeather } from "services/apiCurrentWeather";
import WeatherItem from "components/WeatherItem/WeatherItem";
import Location from "../../components/Location/Location";

const FiveDaysWeather = ({ city, location }) => {
  const [weatherFiveDays, setWeatherFiveDays] = useState([]);
  // eslint-disable-next-line no-unused-vars;
  const [error, setError] = useState("");

  useEffect(() => {
    if (location.lat && location.lon) {
      getFiveDays();
    }
    async function getFiveDays() {
      try {
        const data = await getFiveDaysWeather(location);
        setWeatherFiveDays(data);
        console.log("five days", data);
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

FiveDaysWeather.propTypes = {
  city: PropTypes.string,
  location: PropTypes.object,
};
