import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTubePlayer from "react-youtube";
import movieTrailer from "movie-trailer";

import "./Row.css";

const base_Url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function handleClick(movie) {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(null, { tmdbId: movie.id })
        .then((url) => {
          console.log("url is " + url);
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log("urlParamsn" + urlParams);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-postes">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={handleClick}
              className={`row_posters ${isLargeRow && `row_posterLarge`}`}
              alt={movie.title}
              src={`${base_Url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTubePlayer videoId="wmP3MBjsx20" opts={opts} />}
    </div>
  );
}

export default Row;
