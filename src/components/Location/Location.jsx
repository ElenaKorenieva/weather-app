import PropTypes from "prop-types";

const Location = ({ city, country }) => {
  const cityCapitalize = city[0].toUpperCase() + city.slice(1);
  return <h2>{`${cityCapitalize}, ${country}`}</h2>;
};

export default Location;

Location.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};
