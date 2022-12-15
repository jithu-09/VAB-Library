import "./BooksCard.css";

const BCard = ({ data }) => {
  return (
    // <div className="col-lg-3 col-md-4 col-sm-6" key={data.bookid}>
    //   <div className="card">
    //     <img src={data.bookimg} className="bookimg" alt="..." />

    //     <div className="col-md-15">
    //       <div className="card-body">
    //         <h5 className="card-title">{data.bookname}</h5>

    //         <p className="card-text">{data.bookdescription}</p>

    //         <p className="card-text">
    //           <b>Author</b>: {data.bookauthor}
    //           <br />
    //           <b>Genre</b>: {data.bookgenre}
    //           {/* <b>Released On</b>: {book.bookrd} */}
    //         </p>

    //         <a href="#" className="btn btn-sm btn-success d-block buttonread">
    //           Read book
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //
    <div className="col-lg-3 col-md-4 col-sm-6 mt-4" key={data.bookid}>
      <div className="card card-blog">
        <div className="card-image">
          <a href="#">
            {" "}
            <img className="img" src={data.bookimg} />{" "}
          </a>
          <div className="ripple-cont"></div>
        </div>
        <div className="table">
          <h6 className="category text-success">{data.bookgenre}</h6>
          <h5 className="card-caption">{data.bookname}</h5>
          <p className="card-description"> {data.bookdescription}</p>
          <div className="ftr">
            <div className="author">{data.bookauthor}</div>
            <br />
            <div className="d-flex justify-content-start">
              IMDB: {data.IMDB}
            </div>
            <a
              href={data.booklink}
              className="btn btn-sm btn-success d-block buttonread "
            >
              Read book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCard;
