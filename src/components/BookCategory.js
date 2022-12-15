import "./BooksCard.css";
const BookCategory = ({ data, setSearchResults }) => {
  const filterCategory = (item) => {
    const result = data.filter((cat) => {
      return cat.bookgenre === item;
    });
    setSearchResults(result);
  };
  const sortAToZ = () => {
    const sortResult = [...data].sort((a, b) => {
      return a.bookname.toLowerCase() > b.bookname.toLowerCase() ? 1 : -1;
    });
    setSearchResults(sortResult);
    console.log(sortResult);
  };
  const sortZToA = () => {
    const sortResult = [...data].sort((a, b) => {
      return a.bookname.toLowerCase() < b.bookname.toLowerCase() ? 1 : -1;
    });
    setSearchResults(sortResult);
    console.log(sortResult);
  };
  const sortRating6 = () => {
    const sortResult = [...data]
      .filter((a) => a.IMDB >= 6)
      .sort((a, b) => {
        return b.IMDB - a.IMDB;
      });

    setSearchResults(sortResult);

    console.log(sortResult);
  };

  const sortRating7 = () => {
    const sortResult = [...data]
      .filter((a) => a.IMDB >= 7)
      .sort((a, b) => {
        return b.IMDB - a.IMDB;
      });
    setSearchResults(sortResult);
    console.log(sortResult);
  };

  const sortRating8 = () => {
    const sortResult = [...data]
      .filter((a) => a.IMDB >= 8)
      .sort((a, b) => {
        return b.IMDB - a.IMDB;
      });

    setSearchResults(sortResult);

    console.log(sortResult);
  };
  const sortRating9 = () => {
    const sortResult = [...data]
      .filter((a) => a.IMDB >= 9)
      .sort((a, b) => {
        return b.IMDB - a.IMDB;
      });

    setSearchResults(sortResult);

    console.log(sortResult);
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="dropdown">
          <button
            className="btn btn-lg btn-active btn-outline-default button1 dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" onClick={sortRating6}>
                Rating 6 & above
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={sortRating7}>
                Rating 7 & above
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={sortRating8}>
                Rating 8 & above
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={sortRating9}>
                Rating 9 & above
              </a>
            </li>
            <li>
              <a
                className="dropdown-item btn-outline-default"
                onClick={sortAToZ}
              >
                A-Z
              </a>
            </li>
            <li>
              <a
                className="dropdown-item btn-outline-default"
                onClick={sortZToA}
              >
                Z-A
              </a>
            </li>
          </ul>
        </div>
      <div className="dropdown">
        <button
          className="btn btn-lg btn-active btn-outline-default button1 dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          View Genres
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" onClick={() => setSearchResults(data)}>
              All
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => filterCategory("Adventure")}
            >
              Adventure
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => filterCategory("Action")}
            >
              Action
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => filterCategory("Mystery")}
            >
              Mystery
            </a>
          </li>
          <li>
            <a
              className="dropdown-item btn-outline-default"
              onClick={() => filterCategory("Romance")}
            >
              Romance
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default BookCategory;
