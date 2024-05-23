import React from "react";
import { movies } from "./db";

const Game = async () => {
  const movieID = movies[Math.floor(Math.random() * movies.length)];
  const response = await fetch(
    `https://www.omdbapi.com/?i=${movieID}&apikey=efb9b6cf`
  );
  const movie = await response.json();
  console.log(movie);

  return (
    <div>
      <h1>Guess the Score!</h1>
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} />
    </div>
  );
};

export default Game;
