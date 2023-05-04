import "./App.scss";
import Searchbar from "./components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import { getCityLocation } from "./services/apiCities";
import {
  getCurrentWeather,
  getFiveDaysWeather,
} from "./services/apiCurrentWeather";
import { getPicturesApi } from "./services/apiPictures";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import FiveDays from "pages/FiveDays/FiveDays";
import HoursWeather from "pages/HoursWeather/HoursWeather";
import HoursChart from "pages/HoursChart/HoursChart";
import NotFound from "pages/NotFound/NotFound";

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

  return (
    <>
      <nav>
        <NavLink to="/">TODAY</NavLink>
        <NavLink to="/fiveDays" onClick={getFiveDays} disabled={!city}>
          5 DAYS
        </NavLink>
      </nav>
      <Searchbar getCityName={getCityName} />
      <button type="button" onClick={getBackground}>
        Pictures
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiveDays" element={<FiveDays />}>
          <Route path="hours" element={<HoursWeather />}>
            <Route path="chart" element={<HoursChart />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
