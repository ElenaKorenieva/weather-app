import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import SharedLayout from "components/SharedLayout/SharedLayout";
import FiveDaysWeather from "pages/FiveDaysWeather/FiveDaysWeather";
import Home from "pages/Home/Home";
import HoursChartWeather from "pages/HoursChartWeather/HoursChartWeather";
import HoursWeather from "pages/HoursWeather/HoursWeather";
import NotFound from "pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import { getPicturesApi } from "services/apiPictures";
import { getCityLocation } from "services/apiCities";

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
    <div className={s.app}>
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout background={pictureBg} getCityName={getCityName} />
          }
        >
          <Route index element={<Home city={city} location={location} />} />
          <Route
            path="/fiveDaysWeather"
            element={<FiveDaysWeather city={city} location={location} />}
          >
            <Route path="hoursWeather" element={<HoursWeather />}>
              <Route path="hoursChartWeather" element={<HoursChartWeather />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//Update
