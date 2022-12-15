import "./MusicCard.css";

const MusicCategory = ({ data, setSearchResults }) => {
  const filterCategory = (item) => {
    const result = data.filter((cat) => {
      return cat.genre === item;
    });

    setSearchResults(result);
  };

  const sortAToZ = () => {
    const sortResult = [...data].sort((a, b) => {
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    });

    setSearchResults(sortResult);

    console.log(sortResult);
  };

  const sortZToA = () => {
    const sortResult = [...data].sort((a, b) => {
      return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
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
              onClick={() => filterCategory("Rock")}
            >
              Rock
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => filterCategory("Pop")}
            >
              Pop
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => filterCategory("Blues")}
            >
              Blues
            </a>
          </li>
          <li>
            <a
              className="dropdown-item btn-outline-default"
              onClick={() => filterCategory("Melody")}
            >
              Melody
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default MusicCategory;