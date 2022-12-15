import MusicCard from "./MusicCard";

const MusicList = ({ searchResults }) => {
  const results = searchResults.map((data) => (
    <MusicCard key={data.id} data={data} />
  ));

  const content = results?.length ? (
    results
  ) : (
    <article>
      <p>No Matching Music</p>
    </article>
  );

  return (
    <div className="container1">
      <div className="row">{content}</div>
    </div>
  );
};

export default MusicList;
