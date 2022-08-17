import React, { useState, useEffect } from "react";
import axios from "./axios";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((fData) => (
          <img
            key={fData.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? fData.poster_path : fData.backdrop_path
            }`}
            alt={fData.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
