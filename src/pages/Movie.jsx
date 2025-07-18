import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import ErrorPage from "./pages/ErrorPage";

function Movie() {
  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
      {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>{movie.duration} minutes</p>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre} </span>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
};

export default Movie;
