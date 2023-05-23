import Location from "components/Location/Location";
import TodayData from "components/TodayData/TodayData";
import TodayWeather from "components/TodayWeather/TodayWeather";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <div className={s.homeContainer}>
      <div className={s.locationWrapper}>
        <TodayData />
        <div className={s.cityCountry}>
          <Location />
        </div>
      </div>
      <div className={s.weatherWrapper}>
        <TodayWeather />
      </div>
    </div>
  );
};

export default Home;
