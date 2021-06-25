import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieComponent() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  // receive id from route
  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    let url = `http://api.tvmaze.com/lookup/shows?thetvdb=${id}`;
    let res = await axios.get(url);
    setMovie({ ...res.data });
  };
  console.log(movie)
  return (
    <div>
      <div
        className="movie"
      >
        <div className="large-image">
          <img src={movie.image?.original} />
        </div>
        <div className="name">Name: {movie.name}</div>
        <div className="name">Run Time: {movie.runtime} min</div>
        <div className="genres"><span>Genres: </span>{movie && movie.genres ? movie.genres.map(g => <span>{g}</span>): ''}</div>
        <p dangerouslySetInnerHTML={{__html: movie.summary}}></p>
      </div>
    </div>
  );
}
