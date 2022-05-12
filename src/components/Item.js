import styled from "styled-components";
import './css/Item.css'
const Item = ({title, desc, img1, img2}) => {
return (
  <div className='itemContainer'>
    <div className="textContainer">
      <h1>{title}</h1>
      <h3>{desc}</h3>
    </div>
    <div className="imageContainer">
      <img className='box' src={img1}></img>
      <img className='box overlay' src={img2}></img>
    </div>
  </div>
  )
}
export default Item;