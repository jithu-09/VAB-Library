import {Nav, Navbar, Container}from 'react-bootstrap';
import {NavLink,Link } from 'react-router-dom';
import images from './images/Screenshot_2022-12-05_142041-removebg-preview.png';
import './AboutUs.css';
const NavBar = () => {
    return (
      <div>
        <Navbar bg="transperant" variant="dark" sticky="top" className='navbar-fixed-top Navbarclass'>
          <Container>
          <NavLink to="/">
            <img className='navbar-brand' src={images} alt="" width="100" height="50" />
            </NavLink>
            <Nav className="justify-content-end stroke">
              <NavLink to="/"  className='nav-link'>Home</NavLink>
              <NavLink to="/Movies"  className='nav-link'>Movies</NavLink>
              <NavLink to="/Music"  className='nav-link'>Music</NavLink>
              <NavLink to="/Books" className='nav-link'>Books</NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavBar;