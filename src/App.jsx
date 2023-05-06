import "./App.module.scss";
import Searchbar from "./components/Searchbar/Searchbar";
import { useEffect, useState } from "react";

import { getFiveDaysWeather } from "./services/apiCurrentWeather";
import { getPicturesApi } from "./services/apiPictures";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import FiveDays from "pages/FiveDays/FiveDays";
import HoursWeather from "pages/HoursWeather/HoursWeather";
import HoursChart from "pages/HoursChart/HoursChart";
import NotFound from "pages/NotFound/NotFound";
import { getCityLocation } from "services/apiCities";
import Wrapper from "components/Wrapper/Wrapper";

function App() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });
  const [pictureBg, setPictureBg] = useState("");
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

  async function getFiveDays() {
    try {
      const data = await getFiveDaysWeather(location);
      console.log("five days", data);
    } catch (error) {
      setError(error.message);
    }
  }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setRandomNum(Math.floor(Math.random() * (20 - 1)));
  //   }, 3000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  useEffect(() => {
    async function getBackground() {
      try {
        const data = await getPicturesApi(city);
        setPictureBg(data.hits[0].largeImageURL);
        console.log("background", data.hits[0].largeImageURL);
      } catch (error) {
        setError(error.message);
      }
    }
    getBackground();
  }, [city]);

  return (
    <Wrapper background={pictureBg}>
      <nav>
        <NavLink to="/weather-app">TODAY</NavLink>
        <NavLink to="/fiveDays" onClick={getFiveDays} disabled={!city}>
          5 DAYS
        </NavLink>
      </nav>
      <Searchbar getCityName={getCityName} />
      <Routes>
        <Route
          path="/weather-app"
          element={<Home city={city} location={location} />}
        />
        <Route path="/fiveDays" element={<FiveDays />}>
          <Route path="hours" element={<HoursWeather />}>
            <Route path="chart" element={<HoursChart />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
