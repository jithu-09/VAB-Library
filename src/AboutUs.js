import './AboutUs.css';
import images1 from './images/WallpaperDog-10872958.jpg';
import images2 from './images/movies.jpg';
import images3 from './images/music.jpg';
import images4 from './images/books.jpg';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
      // <div classNameName="bg-img">
      //   <div classNameName="containerBox">
      //     <h2 classNameName="heading">One Stop solution for all your needs!</h2>
      //     <p classNameName="para">
      //       Lorem Ipsum is simply dummy text of the printing and typesetting
      //       industry. Lorem Ipsum has been the industry's standard dummy text
      //       ever since the 1500s, when an unknown printer took a galley of
      //       type and scrambled it to make a type specimen book. It has
      //       survived not only five centuries, but also the leap into
      //       electronic typesetting, remaining essentially unchanged.
      //     </p>
      //   </div>
      // </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={images1} className="carimg" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h4>One Stop for all your musings</h4>
                <p>Find your favourite movies, music and books at one place.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={images2} className="carimg" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Experience the Magic of Cinema</h5>
                <p>Relive the big screen moments at the comfort of your home.</p>
                <div className='slider-btn'>
                    <Link to="/Movies" type="button" className='btn btn-lg btn-success'>Watch Now</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={images3} className="carimg" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Music for your Soul</h5>
                <p>Listen to your favourite tracks with just one click.</p>
                <div className='slider-btn'>
                    <Link to="/Music" type="button" className='btn btn-lg btn-success'>Listen Now</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={images4} className="carimg" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Open mind for different view</h5>
                <p>Read books from renowned authors to get into their minds.</p>
                <div className='slider-btn'>
                    <Link to="/Books" type="button" className='btn btn-lg btn-success'>Read Now</Link>
                </div>
              </div>
            </div> 
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    );
}
export default AboutUs;