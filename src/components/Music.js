import { useEffect, useState } from "react";

import firebase from "./Firebase";

import MusicSearchBar from "./MusicSearchBar";

import MusicCategory from "./MusicCategory";

import MusicList from "./MusicList";

import axios from "axios";

const Music = () => {
  const [data, setData] = useState([]);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://library-app-9ab4d-default-rtdb.firebaseio.com/music/music.json"
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
    <div className="containermusic">
      <MusicSearchBar data={data} setSearchResults={setSearchResults} />

      <MusicCategory data={data} setSearchResults={setSearchResults} />

      <MusicList searchResults={searchResults} />
    </div>
  );
};

export default Music;
