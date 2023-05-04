import { Link, Outlet } from "react-router-dom";

const FiveDays = () => {
  return (
    <>
      <div>FiveDays</div>
      <Link to="hours">Hours</Link>
      <Outlet />
    </>
  );
};

export default FiveDays;
