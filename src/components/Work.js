import React from 'react';
import char from './images/char1.gif'
const Work = () => {
  return (
    <div className='homeContainer'>
    <div className='homeDescription'>
      <h1 className='homeTextDescription'>Hi, <br/>I'm Nataliia Arsenieva, a<br/>creative 
      full-stack developer<br/>from Ukraine.</h1>
      <button>Download CV</button>
    </div>
    <img className='homeCharacter' src={char}></img>
  </div>
  )
}
export default Work