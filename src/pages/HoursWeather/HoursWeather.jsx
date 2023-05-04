import { Link, Outlet } from "react-router-dom";

const HoursWeather = () => {
  return (
    <>
      <div>HoursWeather</div>
      <Link to="chart">Chart</Link>
      <Outlet />
    </>
  );
};

export default HoursWeather;
