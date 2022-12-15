import MoviesCard from "./MoviesCard";

const MoviesList = ({ searchResults }) => {
  const results = searchResults.map((data) => (
    <MoviesCard key={data.id} data={data} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Movies</p>
    </article>
  );

  return (
    <div className="container1">
      <div className="row">{content}</div>
    </div>
  );
};

export default MoviesList;
