import React from 'react';
import './css/Work.css'
import Carousel from "react-elastic-carousel";
import komanda1 from './images/item1.jpg'
import komanda2 from './images/item2.jpg'
import Item from "./Item";

const Work = () => {
  return (
    <div className="">
      <Carousel className='carouselContainer'>
        <Item>
          <div className='workContainer'>
            <div>
              <h1 className="workTitle">Komanda</h1>
              <h3>Komanda is a web application that was designed<br/>
                  for project management purposes</h3>
            </div>
            <div>
                <img className='homeCharacter' src={komanda1}></img>
                <img className='homeCharacter' src={komanda2}></img>
                </div>
          </div>
        </Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
      </Carousel>
    </div>
  )
}
export default Work