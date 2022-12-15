import { useState, useEffect } from "react";

import BooksSearchBar from "./BooksSearchBar";

import BooksList from "./BooksList";

import BookCategory from "./BookCategory";

import axios from "axios";

const Books = () => {
  const [data, setData] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios

      .get("https://library-app-9ab4d-default-rtdb.firebaseio.com/books.json")

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
    <div className="containerbooks">
      {/* <BooksCard books={data} /> */}

      <BooksSearchBar data={data} setSearchResults={setSearchResults} />

      <BookCategory data={data} setSearchResults={setSearchResults} />

      <BooksList searchResults={searchResults} />
    </div>
  );
};

export default Books;
