import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="left">
        <h1 className='logo_text'><span style={{color:"pink", fontSize:"32px"}}>O</span>P</h1>
      </div>
      <div>
        <ul className='right'>
          <Link to={'/'} className='nav-link'><li>Home</li></Link>
          <Link to={'/about'} className='nav-link'><li>About</li></Link>
          <Link to={'/contact'} className='nav-link'><li>Contact</li></Link>
          <Link to={'/project'} className='nav-link'><li>Project</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
