import "./BooksCard.css";

const BooksSearchBar = ({ data, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(data);

    const resultsArray = data.filter((book) =>
      book.bookname.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultsArray);
  };

  return (
    <header className="containerbooks">
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search_input"
          type="text"
          id="search"
          placeholder="Search your favourite books here"
          onChange={handleSearchChange}
        />
      </form>
    </header>
  );
};

export default BooksSearchBar;
