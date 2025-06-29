import React from 'react'
import "./BredCrums.css"
import arrow_icon from "../../assets/arrow_icon.png"
const Bredcrums = (props) => {
  const {product} = props;
  return (
    <div className='breadcrums'>
        Home <img src={arrow_icon} alt="" height="10px"/>
        Shop <img src={arrow_icon} alt="" height="10px"/> {product.category} <img src={arrow_icon} alt="" height="10px"/> {product.name} 
    </div>
  )
}

export default Bredcrums