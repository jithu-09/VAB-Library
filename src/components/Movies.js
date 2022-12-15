import firebase from "./Firebase";

import { useState, useEffect } from "react";

import MoviesSearchBar from "./MoviesSearchBar";

import MoviesList from "./MoviesList";

import MoviesCategory from "./MoviesCategory";

import axios from "axios";

const Movies = () => {
  const [data, setData] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://library-app-9ab4d-default-rtdb.firebaseio.com/movies/movies.json"
      )

      .then((response) => {
        console.log(response.data);

        const dat = [];

        for (let key in response.data) {
          dat.unshift({
            ...response.data[key],

            id: key,
          });
        }

        setData(dat);

        setSearchResults(dat);
      });
  }, []);

  return (
    <div className="containermovie">
      <MoviesSearchBar data={data} setSearchResults={setSearchResults} />

      <MoviesCategory data={data} setSearchResults={setSearchResults} />

      <MoviesList searchResults={searchResults} />
    </div>
  );
};

export default Movies;
