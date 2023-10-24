import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function Cart(props){

    const cartDataEl = props.cart.map((product)=>{
        return(
            <div className="cart--product--container" key={product.id}>
                <img className="cart--products--img" src={product.thumbnail[1]}/>
                    <div className="cart--products--info">
                        <p>{product.name}</p>
                        <p>
                            {product.price()}.00 x {product.amount}
                            <span className="cart--total--price">
                                ${(product.price() * product.amount)}.00
                            </span>
                        </p>
                    </div>
                <FontAwesomeIcon className="cart--trash--icon" icon={faTrash} onClick={()=>props.removeProduct(product.id)}/>
            </div>
        )
    })

    
    return(
        <div className={`cart ${props.isCartOpened? 'active':'inactive'}`} ref={props.refProp}>
            <h3 className="cart--title">Cart</h3>
            <hr className="cart--line"></hr>
            {
                props.cart.length>0?
                <div className="cart--products--container">
                    {cartDataEl}
                    <button className="btn cart--checkout--btn">Checkout</button>
                </div>:
                <h3 className="cart--empty--text">Your cart is empty.</h3>
            }
        </div>
    )   

}