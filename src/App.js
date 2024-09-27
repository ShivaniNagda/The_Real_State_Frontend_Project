import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyComponent from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Services from './Component/Servicess/Servicess';
import Testimonials from './Component/Testimonialss/Testimonials';
import Properties from './Component/Properties/Properties';
import About from './Component/About/About';
import Contact from './Component/Contactt/Concactt';
import Description from './Component/Property-description/Description';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  useEffect(() => {
    const closeMenuOnClick = (e) => {
      if (!e.target.closest('.menu-toggle') && !e.target.closest('.div-Home2')) {
        setIsMenuOpen(false);
      }
    };

    return () => {
      document.removeEventListener('click', closeMenuOnClick);
    };
  }, []);

  return (
    <Router>
      <div className="div-Home">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacce8bcd70ac4edb88994f80eaeabd9a038de64fe40eed36b349e5098334ae7?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b"
          className="img-Home"
          alt="Home"
        />
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`div-Home2 ${isMenuOpen ? 'open' : ''}`}>
       
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(true)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(true)}>
            About
          </Link>
          <Link to="/properties" className="nav-link" onClick={() => setIsMenuOpen(true)}>
            Properties
          </Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(true)}>
            Services
          </Link>
          <Link to="/testimonials" className="nav-link" onClick={() => setIsMenuOpen(true)}>
            Testimonials
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(true)}>
            Contact
          </Link>
         
        </div>

        <div className="div-Home3">
          <img
            loading="lazy"
            srcSet="
              https://cdn.builder.io/api/v1/image/assets/TEMP/d0846ad929861830ea7bb431293aa0e2dde73b97c6b0140eed2336e5cac00067?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=100 100w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/d0846ad929861830ea7bb431293aa0e2dde73b97c6b0140eed2336e5cac00067?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=200 200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/d0846ad929861830ea7bb431293aa0e2dde73b97c6b0140eed2336e5cac00067?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=400 400w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/d0846ad929861830ea7bb431293aa0e2dde73b97c6b0140eed2336e5cac00067?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=800 800w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/d0846ad929861830ea7bb431293aa0e2dde73b97c6b0140eed2336e5cac00067?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1200 1200w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/d0846ad929861830ea7bb431293aa0e2dde73b97c6b0140eed2336e5cac00067?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=1600 1600w,
              https://cdn.builder.io/api/v1/image/assets/TEMP/d0846ad929861830ea7bb431293aa0e2dde73b97c6b0140eed2336e5cac00067?placeholderIfAbsent=true&apiKey=2f9d20c0b8a04fd0bd635c00c3d77c1b&width=2000 2000w
            "
            className="img-2home"
            alt="Decorative"
          />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MyComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/description/:id' element={<Description/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
