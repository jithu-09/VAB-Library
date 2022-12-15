import BCard from "./BCard";
import './BooksCard.css';
const BooksList = ({ searchResults }) => {
  const results = searchResults.map((data) => (
    <BCard key={data.bookid} data={data} />
  ));

  const content = results.length ? (
    results
  ) : (
      <h2 className="Note"><b>No Matching Books</b></h2>
  );
//   console.log(results.length);

  return (
    <div className="container1">
      <div className="row">{content}</div>
    </div>
  );
};

export default BooksList;
