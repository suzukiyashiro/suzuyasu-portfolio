import React from 'react';

const Navbar = ({ isOpen, closeMenu }) => {
  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="close" onClick={closeMenu}>✖</div>
      <ul>
        <li>
          <a href="#skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#works" onClick={closeMenu}>Works</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
