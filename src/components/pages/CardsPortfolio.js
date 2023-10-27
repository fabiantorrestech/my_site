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
import JSCalculator from '../../assets/images/JSCalculator.png'
import RPS from '../../assets/images/RPS.png'

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
            path='https://replit.com/@fabiantorrestec/conwaysgameoflife#README.md'
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
            path='https://replit.com/@fabiantorrestec/LinuxShellInterface#README.md'
          />
          <CardItemPortfolio 
            src={portfolioFS}
            text="Fault Simulator (Digital Circuits) - Python"
            label = 'ECE 464'
            path='https://replit.com/@fabiantorrestec/FaultSimulatorProj1#README.txt'
          />
          </ul>
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItemPortfolio 
            src={bigO}
            text="Data Structures & Algorithms Problems w/ Explanations"
            label = 'DSA'
            path='https://github.com/fabiantorrestech/Data-Structures-Algorithms'
          />
          <CardItemPortfolio
            src={JSCalculator}
            text="JS Calculator Project"
            label = 'Self Project'
            path='https://fabiantorrestech.github.io/calculatorProject/'
          />
          <CardItemPortfolio
            src={RPS}
            text="Rock Paper Scissors"
            label = 'Self Project'
            path='https://fabiantorrestech.github.io/RockPaperScissors'
          />
          <CardItemPortfolio 
            src={modernWebsite}
            text="Source code for this website!"
            label = 'Website'
            path='https://github.com/fabiantorrestech/my_site'
          />
          </ul>
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
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