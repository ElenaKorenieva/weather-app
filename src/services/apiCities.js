import axios from "axios";
import PropTypes from "prop-types";

const API_KEY = "78892f44b81d56714507067e29575b82";

export const getCityLocation = async (q) => {
  const { data } = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q,
        limit: 5,
        appid: API_KEY,
      },
    }
  );
  return data;
};

getCityLocation.propTypes = {
  q: PropTypes.string,
};
