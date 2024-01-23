import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';
import rahman_img from '../../assets/myskills/rahman.png';

const Navbar = ({ sections }) => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isMenuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    let active = '';

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) {
        const offsetTop = sectionElement.offsetTop;
        const offsetHeight = sectionElement.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          active = section.id;
        }
      }
    });

    setActiveSection(active);
    if (scrollPosition >= 60) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };



  const handleNavLinkClick = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      console.log(targetElement.offsetTop, 'e')
      const offsetTop = targetElement.offsetTop;
      console.log(offsetTop, 't')
      scroll.scrollTo(offsetTop, { duration: 1000 });
      console.log(scroll, 'r')
    }
    setActiveSection(id);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  const headerClass = scrolling ? 'header scrolled' : 'header';

  return (
    <div className={headerClass}>
      <div>
        <ScrollLink
          to='home'
          smooth={true}
          duration={1000}
        >
          <img src={rahman_img} alt="nav-img" />
        </ScrollLink>
      </div>
      <div className={`nav-links ${isMenuOpen ? 'activeNav ' : ''}`} onClick={closeMenu}>
        {sections.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            smooth={true}
            spy={true}
            className={item.id === activeSection ? 'active' : ''}
            onClick={() => handleNavLinkClick(item.id)}
            hashSpy={true}
          >
            {item.label}
          </ScrollLink>
        ))}
      </div>
      <div className='contact-btn'>
        <a href="#contact">
          DOWNLOAD CV
        </a>
      </div>
      <div className={`hamburger ${isMenuOpen ? 'activeNav ' : ''}`} onClick={toggleMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </div>
  );
};

export default Navbar;


