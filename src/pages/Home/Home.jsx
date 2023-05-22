import { useEffect, useState } from "react";
import Location from "components/Location/Location";
import { getCurrentWeather } from "services/apiCurrentWeather";
import IconSelector from "components/IconSelector/IconSelector";
import { useSetLocation } from "context/LocationProvider";
import TodayData from "components/TodayData/TodayData";

const Home = () => {
  const { city, location } = useSetLocation();
  const [dayWeather, setDayWeather] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

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

  return (
    <div>
      <TodayData />
      <div>
        <Location city={city} country={dayWeather?.sys?.country} />
      </div>
      <>
        <IconSelector icon={dayWeather?.weather?.[0]?.main} />
      </>
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

      {/* <ul>
        <li>
          {dayWeather?.sys?.sunrise && (
            <span>
              {formatClockShort(new Date(dayWeather?.sys?.sunrise * 1000))}
            </span>
          )}
        </li>
        <li>
          {dayWeather?.sys?.sunset && (
            <span>
              {formatClockShort(new Date(dayWeather?.sys?.sunset * 1000))}
            </span>
          )}
        </li>
      </ul> */}
    </div>
  );
};

export default Home;
