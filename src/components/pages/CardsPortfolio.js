import React from 'react'
import CardItemPortfolio from './CardItemPortfolio';
import './CardsPortfolio.css';
import portfolioConway from '../../assets/images/img-10.jpg'
import portfolioRTC from '../../assets/images/img-11.jpg'
import portfolioLS from '../../assets/images/img-12.jpg'
import portfolioFS from '../../assets/images/img-13.jpg'
import bigO from '../../assets/images/bigO.png'
import oldSite from '../../assets/images/oldSite.png'
import modernWebsite from '../../assets/images/modernWebsite.png'

// The cards are a bit odd --  they will grow and shrink with the amount of text placed in the cards.
function CardsPortfolio() {
  return (
    <div className='cards'>
      <h1>Highlighted Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemPortfolio 
            src={portfolioConway}
            text="Conway's Game of Life - C"
            label = 'CS 107'
            path='https://github.com/fabiantorrestech/conways_game_of_life'
          />
          <CardItemPortfolio 
            src={portfolioRTC}
            text="Arduino Real-Time Clock V2 Presentation Project - C++"
            label = 'IEEE-UIC'
            path='https://docs.google.com/presentation/d/1AcVh6iDbwgRUyq2ggBcgkG-Owis_QjvjC_QfC_bU_Nk/edit?usp=sharing'
          />
          <CardItemPortfolio 
            src={portfolioLS}
            text="Linux Shell Interface - C"
            label = 'CS 361'
            path='https://drive.google.com/file/d/1MUAN0WOX0eTkuLNzIqfQpq0nX0cruYPT/view?usp=sharing'
          />
          <CardItemPortfolio 
            src={portfolioFS}
            text="Fault Simulator (Digital Circuits) - Python"
            label = 'ECE 464'
            path='https://drive.google.com/file/d/1cCqXRpZHynB8E7DFaA2Mnhq0AH6b53an/view?usp=sharing'
          />
          <CardItemPortfolio 
            src={bigO}
            text="Data Structures & Algorithms Problems w/ Explanations"
            label = 'DSA'
            path='https://github.com/fabiantorrestech/Data-Structures-Algorithms'
          />
          <CardItemPortfolio 
            src={modernWebsite}
            text="Source code for this website!"
            label = 'Website'
            path='https://github.com/fabiantorrestech/my_site'
          />
          <CardItemPortfolio 
            src={oldSite}
            text="UIC Student website built via Google Pages"
            label = 'Website'
            path='https://sites.google.com/uic.edu/fabiantorrestech/home?authuser=0'
          />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsPortfolio;