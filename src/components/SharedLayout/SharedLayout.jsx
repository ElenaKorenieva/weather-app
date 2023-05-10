import Searchbar from "components/Searchbar/Searchbar";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = ({ getCityName, background }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        // position: "fixed",
      }}
    >
      <Searchbar getCityName={getCityName} />
      <nav>
        <NavLink to="/">TODAY</NavLink>
        <NavLink to="/fiveDaysWeather">5 DAYS</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
