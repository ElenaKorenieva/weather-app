import { Route, Routes } from "react-router-dom";
import s from "./App.module.scss";
import SharedLayout from "components/SharedLayout/SharedLayout";
import FiveDaysWeather from "pages/FiveDaysWeather/FiveDaysWeather";
import Home from "pages/Home/Home";
import HoursChartWeather from "pages/HoursChartWeather/HoursChartWeather";
import HoursWeather from "pages/HoursWeather/HoursWeather";
import NotFound from "pages/NotFound/NotFound";
import { useSetLocation } from "context/LocationProvider";

// import { getPicturesApi } from "services/apiPictures";
// import { getCityLocation } from "services/apiCities";

function App() {
  const { city } = useSetLocation();
  return (
    <div className={s.app}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {city && (
            <>
              <Route index element={<Home />} />

              <Route path="/fiveDaysWeather" element={<FiveDaysWeather />}>
                <Route path="hoursWeather" element={<HoursWeather />}>
                  <Route
                    path="hoursChartWeather"
                    element={<HoursChartWeather />}
                  />
                </Route>
              </Route>
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

//Update
