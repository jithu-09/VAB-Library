import "./MusicCard.css";

const MusicSearchBar = ({ data, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(data);

    const resultsArray = data.filter((music) =>
      music.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultsArray);
  };

  return (
    <header className="containermusic">
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search_input"
          type="text"
          id="search"
          placeholder="Search Music"
          onChange={handleSearchChange}
        />
      </form>
    </header>
  );
};

export default MusicSearchBar;
