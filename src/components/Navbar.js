import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

// NOTE:
// - fontAwesome icons are applied via CSS classes in index.html, inject with i-tags 
//  - ex: className='fa ...'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // inverts the state of Click when called.
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // hides the button on smaller window screens/mobile
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className="navbar">
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            LinkToLogo <i className='fab fa-typo3'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          {/* allows hamburger menu to disappear/appear for mobile/shrunken windows */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Contact Me
              </Link>
            </li>
          </ul>
          {Button && <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Sign Up</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar