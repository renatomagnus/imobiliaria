import "./styles.scss";
import { useState } from 'react';

const types = ["Buy", "Rent"];
const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = value => {
    setQuery(prev => ({ ...prev, type: value }));
  };

  return (
    <div className="search-bar">
      <div className="type">
        {types.map(type => (
          <button key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="text"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="text"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
      <button>
        <img src="/search.png" alt="" />
      </button>
      </form>
    </div>
  );
};

export default SearchBar;
