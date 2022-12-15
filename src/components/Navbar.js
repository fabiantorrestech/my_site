import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';

// NOTE:
// - fontAwesome icons are applied via CSS classes in index.html, inject with i-tags 
//  - ex: className='fa ...'

function Navbar() {

  // React Hook - to utilize state for button logic
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // inverts the state of Click when called.
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // hides the hamburger button, unless on mobile/small windows
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // React hook - to show and hide the button
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className="navbar">
        <div className='navbar-container'>
          <Link to="/my_site" className="navbar-logo" onClick={closeMobileMenu}>
            Fabian Torres<i class="fas fa-code"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {/* changes icon based on click's state */}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          {/* allows hamburger menu to disappear/appear for mobile/shrunken windows */}
          {/* changes className to allow different styling dependent on click's state */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/my_site' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/my_site/about-me' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/my_site/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/my_site/contact-me' className='nav-links' onClick={closeMobileMenu}>
                Contact Me
              </Link>
            </li>
          </ul>
          {/* unused button in the navbar (sign-up previously...) */}
          {/* {button && <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Sign Up</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default Navbar