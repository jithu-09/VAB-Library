import "./MusicCard.css";

const MusicCard = ({ data }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-4" key={data.id}>
      <div className="card card-blog">
        <div className="card-image">
          <a href="#">
            {" "}
            <img className="img" src={data.img} />{" "}
          </a>
          <div className="ripple-cont"></div>
        </div>
        <div className="table">
          <h6 className="category text-success">{data.genre}</h6>
          <h5 className="card-caption">{data.name}</h5>
          <div className="ftr">
            <div className="author">{data.artist}</div>
            <br />
            <div className="d-flex justify-content-start">
              ReDate: {data.date}
            </div>
            <a
              href={data.song}
              className="btn btn-sm btn-success d-block buttonread "
            >
              Listen Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
