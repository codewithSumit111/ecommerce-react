import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men"/> }/>
        <Route path="/women" element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path="/kid" element={<ShopCategory banner={kids_banner}category="kids"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    )
  }
//   ReactDOM.render(
//   <ShopContextProvider>
//     <App />
//   </ShopContextProvider>,
//   document.getElementById('root')
// );
  export default App;