import React, { useState } from "react";
import ShowCard from "./ShowCard";

const SearchShows = () => {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState([]);

  const handleSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => response.json())
      .then((data) => setShows(data.map((result) => result.show)));
  };

  return (
    <div className="search-shows">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a show"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="show-list">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default SearchShows;
