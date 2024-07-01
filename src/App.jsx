import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import ShowList from "./components/ShowList";
import SingleShow from "./components/SingleShow";
import SearchShows from "./components/SearchShows";

function App() {
  return (
    <div className="app">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/show/:id" element={<SingleShow />} />
        <Route path="/search" element={<SearchShows />} />
      </Routes>
    </div>
  );
}

export default App;
