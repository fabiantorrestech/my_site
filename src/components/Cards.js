import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import cardImage1 from '../assets/images/img-9.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>This is some more sample text</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src={cardImage1}
              text='Hello There!'
              label='mySampleLabel'
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards