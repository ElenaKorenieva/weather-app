import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import IconSelector from "components/IconSelector/IconSelector";
import { formatLongDayOfWeek, formatDayAndMonth } from "../../utils/formatDate";

const WeatherItem = ({ weatherFiveDays }) => {
  return (
    <>
      <ul>
        {weatherFiveDays?.map(
          ({
            dt,
            dt_txt,
            main: { temp_max, temp_min },
            weather: [{ main }],
          }) => (
            <li key={dt}>
              <p>{formatLongDayOfWeek(dt_txt)}</p>
              <p>{formatDayAndMonth(dt_txt)}</p>
              <IconSelector icon={main} />
              <div>
                <p>min</p>
                <span>{Math.round(temp_min)}</span>
              </div>
              <div>
                <p>max</p>
                <span>{Math.round(temp_max)}</span>
              </div>
              <Link to="hoursWeather">More info</Link>
            </li>
          )
        )}
      </ul>
      <Outlet />
    </>
  );
};

export default WeatherItem;

WeatherItem.propTypes = {
  weatherFiveDays: PropTypes.array,
};
