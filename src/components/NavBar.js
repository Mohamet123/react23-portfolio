
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { FaBars } from "react-icons/fa";

export const MyNavBar =() => {
  const [activeLink , setActiveLink] = useState('home');
  const [scrolled , setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if ( window.scrollY > 50){
        setScrolled (true);
      } else {
        setScrolled (false);
      }
    }

    window.addEventListener('scroll' , onScroll);

    return () => window.removeEventListener('scroll' ,onScroll );
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
   
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggle-icon'><FaBars className='text-white'/></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Compétences</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('project')}>Projets</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('contact')}>Contacts</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>  
              <a href='#'><img src={navIcon1} alt='' /> </a>
              <a href='#'><img src={navIcon2} alt='' /> </a>
              <a href='#'><img src={navIcon3} alt='' /> </a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Connectons-nous</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar; // Exportez le composant sous le nom "NavBar"