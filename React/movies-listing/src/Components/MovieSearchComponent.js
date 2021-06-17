import axios from "axios";
import React, { useState } from "react";
import LoadingComponent from "./LoadingComponent";

export default function MovieSearchComponent() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const SearchMovie = async () => {
    setLoading(true);
    let url = `http://api.tvmaze.com/search/shows?q=${movieName}`;
    let res = await axios.get(url);
    setMovies([...res.data]);
    setLoading(false);
  };

  const HandleChange = (e) => {
    setMovieName(e.target.value);
  };

  return (
    <div className="movie-search-wrapper">
      <div className="search-field">
        <input type="text" placeholder="Search..." onChange={HandleChange} />
        <button className="search-btn" onClick={SearchMovie}>
          Search
        </button>
      </div>
      <div className="result-wrapper">
        {loading ? (
          <LoadingComponent />
        ) : (
          movies.map((movie, key) => (
            <div className="movie" key={key}>
              <div className="image">
                <img src={movie.show.image?.medium} />
              </div>
              <div className="name">{movie.show.name}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
