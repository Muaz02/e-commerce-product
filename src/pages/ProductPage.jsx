import React from "react";
import { useRef } from 'react';
import { cartData as data } from '../data'
import Main from "../components/Main";
import Cart from "../components/Cart";
import Header from "../components/Header";
import Menu from "../components/Menu/Menu";

export default function ProductPage(){
    const [cartData,setCartData] = React.useState(data)
    const [isCartOpened,setIsCartOpened] = React.useState(false)
    const [isMenuOpened,setIsMenuOpened] = React.useState(false)
    const menuRef = useRef(null);
    const cartRef = useRef(null)

    function toggleCart(){
        setIsCartOpened(true)
    }

    function openMenu(){
        setIsMenuOpened(true)
    }

    function closeMenu(){
        setIsMenuOpened(false)
    }

    function removeProduct(id){
        setCartData(prevCart => prevCart.filter(product=>{
            return product.id != id
        }))
    }

    React.useEffect(() => {
        let handler = (e)=>{
          if(!menuRef.current.contains(e.target)){
            closeMenu()
          }      
        };
        document.addEventListener("mousedown", handler);
        
        return() =>{
          document.removeEventListener("mousedown", handler);
        }
      });

    React.useEffect(()=> {
        let handler = (e)=>{
            if(!cartRef.current.contains(e.target) && (e.target != document.querySelector(".nav--cart")) ){
            setIsCartOpened(false)
            }      
        };
        document.addEventListener("mousedown", handler);

        return() =>{
          document.removeEventListener("mousedown", handler);
        }
    },[])

    return(            
            <div className="container"> 
                <Header toggleCart={toggleCart} openMenu={openMenu} isCartOpened={isCartOpened}/>
                <Menu refProp={menuRef} closeMenu={closeMenu} isMenuOpened={isMenuOpened}/>
                <Cart refProp={cartRef} isCartOpened={isCartOpened} cart={cartData} removeProduct={removeProduct}/>
                <Main setCartData={setCartData}/>
            </div>
    )
}