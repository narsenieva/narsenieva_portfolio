import React from 'react';
import './css/Work.css'
import Carousel from "react-elastic-carousel";

import Item from "./Item";
import komanda1 from './images/item1.jpg'
import komanda2 from './images/item2.jpg'
const workItem1 = {
  title: 'Komanda',
  desc: "A web application for project management purposes.\nBuilt on React using RESTful API and incorporated an \nMVC pattern to create a project management software.",
  img1: komanda1,
  img2: komanda2};
const Work = () => {
  return (
    <div className="carouselContainer">
      <Carousel>
        <Item {...workItem1}></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </Carousel>
    </div>
  )
}
export default Work