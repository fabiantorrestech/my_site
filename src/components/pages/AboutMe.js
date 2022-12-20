import React from 'react'
import '../../App.css'
import './AboutMe.css'

function AboutMe(){
  return (
    <>
    <div className='about-me'>
      <div className='about-me-container'>

        <div className='about-me-title'>
          <h1>About Me</h1>
        </div>

        <div className='about-me-body'>
          <body>
            My name is Fabian Torres. I grew up in the Chicagoland Area.<br/>
            I'm a University of Illinois at Chicago (UIC) Computer Engineering Alum.<br/>
            My portfolio ranges from embedded development with C, microcontrollers, to backend
          </body>

          {/* refreshing on a different page '/my_site/contact_me" does not work? */}

        </div>

      </div>
    </div>
    </>
  )
};

export default AboutMe;
