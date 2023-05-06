import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getQuotesApi } from "services/apiQuotes";
import Location from "components/Location/Location";
import { getCurrentWeather } from "services/apiCurrentWeather";
import QoutesItem from "components/QuotesItem/QuotesItem";
import {
  formatDayOfMonth,
  formatShortDayOfWeek,
  formatMonth,
  formatClockShort,
} from "utils/formatDate";
import Clock from "components/Clock/Clock";

const Home = ({ city, location }) => {
  const [dayWeather, setDayWeather] = useState({});

  const [error, setError] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    if (location.lat && location.lon) {
      setCurrentWeather();
    }

    async function setCurrentWeather() {
      try {
        // const { lat, lon } = location;
        const data = await getCurrentWeather(location);
        setDayWeather(data);
      } catch (error) {
        setError(error.message);
      }
    }
  }, [location]);

  console.log(dayWeather);

  useEffect(() => {
    async function getQuotes() {
      try {
        const data = await getQuotesApi();
        setQuotes(data.results);
      } catch (error) {
        setError(error.message);
      }
    }
    getQuotes();
  }, []);

  const date = new Date().toJSON();

  return (
    <>
      {city && <Location city={city} country={dayWeather?.sys?.country} />}
      <div>
        <p>{Math.round(dayWeather?.main?.temp) || null}</p>
        <div>
          <p>min</p>
          <p>{Math.round(dayWeather?.main?.temp_min) || null}</p>
        </div>
        <div>
          <p>max</p>
          <p>{Math.round(dayWeather?.main?.temp_max) || null}</p>
        </div>
      </div>

      <ul>
        <li>{formatDayOfMonth(date)}</li>
        <li>{formatShortDayOfWeek(date)}</li>
        <li>{formatMonth(date)}</li>
        <li>
          <Clock />
        </li>
        <li>
          {dayWeather?.sys?.sunrise &&
            formatClockShort(new Date(dayWeather?.sys?.sunrise * 1000))}
        </li>
        <li>
          {dayWeather?.sys?.sunset &&
            formatClockShort(new Date(dayWeather?.sys?.sunset * 1000))}
        </li>
      </ul>
      <QoutesItem data={quotes} />
    </>
  );
};

export default Home;

Home.propTypes = {
  city: PropTypes.string,
  location: PropTypes.object,
};
