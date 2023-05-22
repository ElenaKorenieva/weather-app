import Searchbar from "components/Searchbar/Searchbar";
import CityPictures from "components/cityPictures/CityPictures";
import { NavLink, Outlet } from "react-router-dom";
import s from "./SharedLayout.module.scss";

const SharedLayout = () => {
  return (
    <div className={s.bg}>
      <CityPictures />
      <Outlet />
      <Searchbar />
      <nav>
        <NavLink to="/">TODAY</NavLink>
        <NavLink to="/fiveDaysWeather">5 DAYS</NavLink>
      </nav>
    </div>
  );
};

export default SharedLayout;
