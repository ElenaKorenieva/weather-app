import axios from "axios";
import PropTypes from "prop-types";

const API_KEY = "78892f44b81d56714507067e29575b82";

export const getCurrentWeather = async ({ lat, lon }) => {
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        lat,
        lon,
        appid: API_KEY,
      },
    }
  );
  return data;
};

getCurrentWeather.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};
