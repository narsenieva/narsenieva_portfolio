import React from 'react';
import './css/Work.css'
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import char from './images/char1.gif'
import Flickity from 'react-flickity-component'
const About = () => {
  return (
    <div>
    <div className='headerMock'></div>
    <div className='homeContainer'>
      <div className='homeDescription'>
        <h1 className='homeTextDescription'>Hi, <br/>I'm Nataliia Arsenieva, a<br/>creative 
        full-stack developer<br/>from Ukraine.</h1>
        <button>Download CV</button>
      </div>
      <img className='homeCharacter' src={char}></img>
    </div>
    </div>
  )
}
export default About