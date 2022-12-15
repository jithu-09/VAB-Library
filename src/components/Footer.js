import images from '../images/Screenshot_2022-12-05_142041-removebg-preview.png';
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container text-center">
        <NavLink to="/">
          <img
            className="navbar-brand"
            src={images}
            alt=""
            width="100"
            height="40"
          />
        </NavLink>

        <span className="text">&copy; 2022 VAB-LIB</span>
      </div>
    </div>
  );
};

export default Footer;
