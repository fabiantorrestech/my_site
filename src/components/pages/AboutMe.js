import React from 'react'
import '../../App.css'
import './AboutMe.css'

function AboutMe(){
  return (
    <>
    <div className='about-me'>
      <div className='about-me-container'>
          <div className = 'about-me-contents'>
            <section className='about-me-title'>
              <h1> This is my about me page title!</h1>
            </section>
            <section className='about-me-info'>
              <body>
                This is my story.
              </body>
            </section>
          </div>
        </div>
    </div>
    </>
  )
};

export default AboutMe;
