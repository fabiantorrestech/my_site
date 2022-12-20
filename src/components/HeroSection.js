import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Button } from './Button'
import videos from '../assets/videos/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={videos} autoPlay loop muted/>
      <h1>Welcome to my website!</h1>
      <p>Feel free to take a look around!(:</p>
      {/* unused buttons below */}

      {/* <div className='hero-btns'>
        <Button className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
            A Test Button
        </Button>
        <Button className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
            Another Test Button
        </Button>
      </div> */}
    </div>
  )
}

export default HeroSection;