import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../requestes";
import "./Banner.css";

const base_Url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fethData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
    }
    fethData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${base_Url}${movie?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="banner"
      >
        <div className="banner-contents">
          <h1 className="banner-title">
            {movie?.name || movie?.title || movie?.orignal_name}
          </h1>
          <div className="banner-btns">
            <button className="banner-btn">Play</button>
            <button className="banner-btn">My List</button>
          </div>

          <h1 className="banner-discpribtion">
            {truncate(movie.overview, 220)}
          </h1>
        </div>
        <div className="banner-fadebottom"></div>
      </header>
    </>
  );
}

export default Banner;
