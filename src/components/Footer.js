import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
  return(
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Here is my footer heading
        </p>
        <p className='footer-subscription-text'>
          This is some footer text
        </p>
        <p className='input-areas'>
          <form>
            <input type="email" name="email" placeholder="text-input" className="footer-input"/>
            <Button buttonStyle='btn--outline'>A button</Button>
          </form>
        </p>
      </section>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Footer Link Items</h2>
            <a href='https://www.linkedin.com/in/fabian-torres-/'>LinkedIn</a>
            <a href='https://www.github.com/fabiantorrestech'>Github</a>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>

          <div className='footer-logo'>
            {/* LINK IS NORMALLY HERE WITH, className='social-logo', className='fab fa-typo3' */}
            <Link to='/my_site' className='social-logo'>
              Fabian Torres<i class="fas fa-code"></i>
            </Link>
          </div>
          <small className='website-rights'> Fabian Torres 2022</small>

          <div className='social-icons'>
            <div className='social-icon-link github' target="_blank" aria_label="Github">
                <a href='https://www.github.com/fabiantorrestech'>
                  <i class="fab fa-github"/>
                </a>
            </div>
            <div className='social-icon-link linkedin' target="_blank" aria_label="LinkedIn">
              <a href='https://www.linkedin.com/in/fabian-torres-/'>
                <i class="fab fa-linkedin"/>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
export default Footer;