import React from "react";

const ShowCard = ({ show }) => {
  return (
    <div className="show-card">
      <img src={show.image?.medium} alt={show.name} />
      <h2>{show.name}</h2>
      <p>{show.summary}</p>
    </div>
  );
};

export default ShowCard;
