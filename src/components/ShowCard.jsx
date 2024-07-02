import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShowCard = ({ show }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="show-card">
      <img src={show.image?.medium} alt={show.name} />
      <h2>{show.name}</h2>
      <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
      <Link to={`/show/${show.id}`}>More Details</Link>
      {show.summary && show.summary.length > 100 && (
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
      {showMore && <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>}
    </div>
  );
};

export default ShowCard;
