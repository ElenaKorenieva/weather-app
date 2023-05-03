import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import { getCityLocation } from "./services/apiCities";
import {
  getCurrentWeather,
  getFiveDaysWeather,
} from "./services/apiCurrentWeather";
import { getPicturesApi } from "./services/apiPictures";
import { getQuotesApi } from "./services/apiQuotes";

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

  async function getFiveDays() {
    try {
      const data = await getFiveDaysWeather(location);
      console.log("five days", data);
    } catch (error) {
      setError(error.message);
    }
  }
  async function getBackground() {
    try {
      const data = await getPicturesApi(city);
      console.log("background", data);
    } catch (error) {
      setError(error.message);
    }
  }

  async function getQuotes() {
    try {
      const data = await getQuotesApi();
      console.log("quotes", data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <Searchbar getCityName={getCityName} />
      <button type="button" onClick={getFiveDays} disabled={!city}>
        5 DAYS
      </button>
      <button type="button" onClick={getBackground}>
        Pictures
      </button>
      <button type="button" onClick={getQuotes}>
        Quotes
      </button>
    </>
  );
}

export default App;
