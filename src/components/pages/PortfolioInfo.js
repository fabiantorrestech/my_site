import React from 'react'
import './PortfolioInfo.css'

function PortfolioInfo(){
  return (
    <>
    <div className='portfolio'>
      <div className='portfolio-container'>

        <div className='portfolio-title'>
          Portfolio
        </div>

        <div className='portfolio-body'>
            My work ranges from an electrical engineering background with embedded-development in C/C++ with microcontrollers and Linux TO full-stack development utilizing ReactJS,
            Python, Java. Additionally, I love to give back to the community via outreach and other organizations.<br/><br/>

            You can find some of my work by scrolling below and clicking on a card that interests you!<br/><br/>
            
            <div className='portfolio-github-link'>
                <a href="https://www.github.com/fabiantorrestech">
                    <i class='fab fa-github'/> fabiantorrestech
                </a><br/><br/>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default PortfolioInfo;