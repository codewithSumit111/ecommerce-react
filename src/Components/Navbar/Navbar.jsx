import React, { useContext, useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [menu, setMenu]=useState("home")
  const {getTotalcartItems} = useContext(ShopContext)
  return (
    <div className="navbar"> 
      <div className="nav-logo">
        <img src="src/assets/logo.webp" alt="Logo" height="40px"/>
        <p>Shopify</p>
      </div> 
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/men">men</Link>{menu==="men" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/women">women</Link>{menu==="women" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"#626262"}} to="/kid">kids</Link>{menu==="kids" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart"><img src="src/assets/cart_icon.png" alt="" height="40px" /></Link>
        <div className="nav-cart-count">{getTotalcartItems()}</div>
      </div>

    </div>
  )
}

export default Navbar;