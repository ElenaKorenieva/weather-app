import { useState } from "react";

import { ReactComponent as LocationIcon } from "../../assets/service-icons/location.svg";
import { ReactComponent as FavoritesIcon } from "../../assets/service-icons/Star.svg";
import { useSetLocation } from "context/LocationProvider";

const Searchbar = () => {
  const { getCityName } = useSetLocation();
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getCityName(query);
    localStorage.setItem("city", JSON.stringify(query));
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
