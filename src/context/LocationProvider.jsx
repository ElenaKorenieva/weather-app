import { getCityLocation } from "services/apiCities";
import { getCurrentWeather } from "services/apiCurrentWeather";
import { getPicturesApi } from "services/apiPictures";

const { createContext, useContext, useState, useEffect } = require("react");
const LocationContext = createContext(); // Provider + Consumer

export const useSetLocation = () => {
  const value = useContext(LocationContext);
  return value;
}; // Custom hook

export const LocationProvider = ({ children }) => {
  const [city, setCity] = useState(
    JSON.parse(localStorage.getItem("city")) || ""
  );

  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });

  const [dayWeather, setDayWeather] = useState({});

  const [pictureBg, setPictureBg] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const getCityName = (query) => {
    setCity(query.trim());
  };

  useEffect(() => {
    if (city) {
      setCityApi();
    }
    async function setCityApi() {
      try {
        const data = await getCityLocation(city);
        setLocation({ lat: data[0].lat, lon: data[0].lon });

        if (data.length === 0) {
          throw new Error("No cities found");
        }
      } catch (error) {
        setError(error.message);
      }
    }
  }, [city]);

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

  useEffect(() => {
    async function getBackground() {
      try {
        const data = await getPicturesApi(city);
        setPictureBg(data.hits[0].largeImageURL);
      } catch (error) {
        setError(error.message);
      }
    }
    getBackground();
  }, [city]);

  return (
    <LocationContext.Provider
      value={{ city, location, pictureBg, error, getCityName, dayWeather }}
    >
      {children}
    </LocationContext.Provider>
  );
};
