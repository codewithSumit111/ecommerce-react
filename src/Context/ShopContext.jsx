import React, {createContext, useState } from "react";
import all_product from "../assets/all_product";
export const ShopContext = createContext();
const getDefaultCart = () =>{
        let cart = {};
        for(let index=0; index< all_product.length+1; index++){
            cart[index]=0
        }
        return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart())

    const addTocart = (itemId) =>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]+1,})
        );
    };
    const removeFromcart = (itemId) =>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]-1,})
        );
    };
    const getTotalcartAmount = () =>{
        let totaalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totaalAmount += itemInfo.new_price*cartItems[item];
            }
        }
        return totaalAmount;
    }
    const getTotalcartItems = () =>{
        let totaalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totaalItems += cartItems[item];
            }
        }
        return totaalItems;
    }
const contextValue = {getTotalcartAmount, getTotalcartItems, all_product,cartItems, addTocart, removeFromcart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
    };
export default ShopContextProvider;