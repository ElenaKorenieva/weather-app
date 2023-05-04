import axios from "axios";
import PropTypes from "prop-types";

const apiUrl = "https://api.openweathermap.org/data/2.5";
const API_KEY = "78892f44b81d56714507067e29575b82";

const defaultSearchParams = {
  lat: null,
  lon: null,
  units: "metric",
  appid: API_KEY,
};

export const getCurrentWeather = async ({ lat, lon }) => {
  const { data } = await axios.get(`${apiUrl}/weather`, {
    params: { ...defaultSearchParams, lat, lon },
  });
  return data;
};

export const getFiveDaysWeather = async ({ lat, lon }) => {
  const { data } = await axios.get(`${apiUrl}/forecast`, {
    params: { ...defaultSearchParams, lat, lon },
  });
  return data;
};

getCurrentWeather.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};
