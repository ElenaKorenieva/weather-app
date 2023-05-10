import { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as LocationIcon } from "../../assets/service-icons/location.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/service-icons/Star.svg";

const Searchbar = ({ getCityName }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getCityName(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>
        <LocationIcon type="submit" />
      </button>
      <input
        type="search"
        name="search"
        placeholder="Enter the city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="button">
        <FavoritesIcon />
      </button>
    </form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  getCityName: PropTypes.func,
};
