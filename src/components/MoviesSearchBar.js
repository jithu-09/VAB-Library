import "./MoviesCard.css";

const MoviesSearchBar = ({ data, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(data);

    const resultsArray = data.filter((Movie) =>
      Movie.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultsArray);
  };

  return (
    <header className="containermovie">
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search_input"
          type="text"
          id="search"
          placeholder="Search Movies"
          onChange={handleSearchChange}
        />
      </form>
    </header>
  );
};

export default MoviesSearchBar;
