import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import cardImage1 from '../assets/images/img-9.jpg'
import cardImage2 from '../assets/images/img-7.jpg'
import cardImage3 from '../assets/images/img-5.jpg'


// The cards are a bit odd --  they will grow and shrink with the amount of text placed in the cards.
function Cards() {
  return (
    <div className='cards'>
      <h1>This is some more sample text</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src={cardImage1}
              text='A bit about myself!'
              label='About Me'
              path="/my_site/about-me"
            />
            <CardItem 
              src={cardImage2}
              text='A collection of some of my past projects'
              label='Portfolio'
              path="/my_site/portfolio"
            />
            <CardItem 
              src={cardImage3}
              text='Want to reach out to me?'
              label='Contact Me'
              path="/my_site/contact-me"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards