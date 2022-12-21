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
            My name is Fabian Torres. I'm a Chicagoland native and University of Illinois at Chicago (UIC) Computer Engineering Alum.<br/><br/>

            I consider myself a creative turned technologist. I seek to bring that same creativity, curiousity, and passion to the tech-space.<br/><br/>

            My hobbies include keeping myself active (running, rock-climbing, and the gym), custom-painting/modding
            gaming mice, mechanical-keyboards, and anything I can get my hands on. (: <br/><br/>


          </body>

          {/* refreshing on a different page '/my_site/contact_me" does not work? */}

        </div>

      </div>
    </div>
    </>
  )
};

export default AboutMe;
