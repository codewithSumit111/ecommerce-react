import React, { useContext } from 'react'
import "./CartItems.css"
import remove_icon from '../../assets/remove.webp'
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {
    const {getTotalcartAmount, all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img className='carticon-product-icon' src={e.image} alt="" height="100px"/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>
                        {cartItems[e.id]}
                    </button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} alt="" height="20px" onClick={()=>removeFromCart(e.id)}/>
                </div>
                <hr/>
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalcartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${getTotalcartAmount()}</p>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='promo code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems