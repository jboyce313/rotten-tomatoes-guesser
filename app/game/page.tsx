import React from "react";
import { movies } from "./db";
import Slider from "../components/slider";

const Game = async () => {
  const movieID = movies[Math.floor(Math.random() * movies.length)];
  const response = await fetch(
    `https://www.omdbapi.com/?i=${movieID}&apikey=efb9b6cf`
  );
  const movie = await response.json();
  const rtScore = parseInt(
    movie.Ratings.find(
      (rating: { Source: string }) => rating.Source === "Rotten Tomatoes"
    )?.Value || "0"
  );
  console.log(movie);

  return (
    <div>
      <h1>Guess the Score!</h1>
      <h2>
        {movie.Title} ({movie.Year})
      </h2>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} />
      <Slider />
    </div>
  );
};

export default Game;
