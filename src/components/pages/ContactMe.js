import React from 'react'
import '../../App.css'
import './ContactMe.css'

function ContactMe(){
  return (
    <>
      <div className='contact-me'>
        <div className='contact-me-container'>

          <div className='contact-me-title'>
            <h1>Contact Me </h1>
          </div>

          <div className='contact-me-body'>
            <body>
              These are preferred methods of communication.<br/>
              I will respond as soon as I can. Thanks!<br/><br/>
              <div className='contact-me-body-socials'>
                <a href="https://www.linkedin.com/in/fabian-torres-/">
                  <i class='fab fa-linkedin'/> LinkedIn
                </a><br/><br/>

                <a href="mailto:fabiantorrestech@gmail.com" className='email-text'>
                  <i class='far fa-envelope'/> fabiantorrestech@gmail.com
                </a><br/><br/>

                <a href="tel:+17086034598">
                  <i class='fas fa-phone-square-alt'/> (+1) 708-603-4598
                </a><br/><br/>

              </div>
            </body>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContactMe;