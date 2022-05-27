import movieTrailer from "movie-trailer";
import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../Api/baseURL";
import "./style.scss";

const Row = ({ fetchUrl, islarge, title }) => {
  const scrollEle = useRef();
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  const prefixs = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function res() {
      const res = await axios.get(fetchUrl);
      setMovies(res?.data.results);
    }
    res();
  }, [fetchUrl, movies]);

  //wheel scroll
  useEffect(() => {
    scrollEle.current.addEventListener("wheel", (e) => {
      e.preventDefault();

      scrollEle.current.scrollBy({
        left: e.deltaY < 0 ? -40 : 40,
      });
    });
  }, []);

  //handleYouTube
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  let DataShow = movies.map((movie) => (
    <>
      <img
        key={movie.id}
        src={`${prefixs}${islarge ? movie.poster_path : movie.backdrop_path}`}
        alt="poster"
        onClick={() => handleClick(movie)}
        className={
          islarge
            ? "h-[250px] hover:scale-[1.08] transition-[450ms] ease-in object-cover p-2"
            : "h-[150px] hover:scale-[1.08] transition-[450ms] ease-in object-cover p-2 image_youtube"
        }
      />
    </>
  ));

  return (
    <>
      <div className="ml-6 font-bold text-[18px] mb-2 Row-youtube">
        <h1 className="text-white pt-5">{title}</h1>
      </div>
      <div
        className="scroll overflow-x-scroll overflow-y-hidden ml-6 "
        ref={scrollEle}
      >
        <div className="flex">{DataShow}</div>
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      </div>
    </>
  );
};

export default Row;
