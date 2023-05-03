import { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../../assets/location.svg";

const Searchbar = ({ getCityName }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getCityName(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <img src={Icon} alt="search" />
      </button>
    </form>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  getCityName: PropTypes.func,
};
