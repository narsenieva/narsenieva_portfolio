import React from 'react';
import './css/Home.css'
import char from './images/char1.gif'
import { saveAs } from "file-saver";
const Home = () => {
  const saveFile = () => {
    saveAs("NataliiaArsenieva_CV.pdf");
  };
  return (
    <div>
    <div className='headerMock'></div>
    <div className='homeContainer'>
      <div className='homeDescription'>
        <h1 className='homeTextDescription'>Hi, <br/>I'm Nataliia Arsenieva, a<br/>creative 
        full-stack developer<br/>from Ukraine.</h1>
        <button onClick={saveFile}>Download CV</button>
      </div>
      <img className='homeCharacter' src={char}></img>
    </div>
    </div>
  )
}
export default Home