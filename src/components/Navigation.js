import React from 'react';
import { useState } from 'react';

//logic for navigation tabs to display differently according to rendered page
function Navigation(props) {
  //accepting props from partent to use in Header
  const { currentPage, handlePageChange } = props;
  
  return (
      <ul className="nav nav-tabs nav-fill" id="nav-tabs-group">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            id={currentPage === 'About' ? 'nav-active' : 'nav-inactive'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            id={currentPage === 'Portfolio' ? 'nav-active' : 'nav-inactive'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            id={currentPage === 'Contact' ? 'nav-active' : 'nav-inactive'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            id={currentPage === 'Resume' ? 'nav-active' : 'nav-inactive'}
          >
            Resume
          </a>
        </li>
      </ul>
  );
}

export default Navigation;
