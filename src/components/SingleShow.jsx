import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleShow = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  if (!show) return <div>Loading...</div>;

  return (
    <div className="single-show">
      <img src={show.image?.medium} alt={show.name} />
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
    </div>
  );
};

export default SingleShow;
