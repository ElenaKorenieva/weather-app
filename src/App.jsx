import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import { getCityLocation } from "./services/apiCities";
import { getCurrentWeather } from "./services/apiCurrentWeather";

function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });

  const getCityName = (query) => {
    setCity(query);
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
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    }
  }, [location]);

  return (
    <>
      <Searchbar getCityName={getCityName} />
    </>
  );
}

export default App;
