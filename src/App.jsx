import React, { useState, useEffect } from 'react';
import Brands from "./components/Brands/Brands";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import LatestProjects from "./components/LatestProjects/LatestProjects";
import Myexperience from "./components/Myexperience/Myexperience";
import Myservices from "./components/Myservices/Myservices";
import Myskills from "./components/Myskills/Myskills";
import Testimonial from "./components/Testimonial/Testimonial";
import Navbar from './components/Navabar/Navbar';

function App() {
  const [loading, setLoading] = useState(true);
  const sections = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICE' },
    { id: 'skills', label: 'SKILL' },
    { id: 'latestProjects', label: 'PORTFOLIO' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    // Simulate a 1000ms loading time
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <div className='loading-container'>
          <div className="loader"></div>
        </div>
      ) : (
        <div className='sections'>
          <Navbar sections={sections} />
          <Home />
          <Brands />
          <Myexperience />
          <Myservices />
          <Myskills />
          <LatestProjects />
          <Testimonial />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;



