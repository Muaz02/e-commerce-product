import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faChevronLeft, faChevronRight, faX } from '@fortawesome/free-solid-svg-icons'
import { products } from "../data";

export default function Main(props){
    const product = products[0]
    const [currentImgId,setCurrentImgId] = React.useState(0)
    const [orderAmount,setOrderAmount] = React.useState(0)
    const [lightboxDisplay, setLightBoxDisplay] = React.useState(false)

    const productThumbnailEl = product.thumbnail.map((thumb,index)=> {
        return (
            <img 
                className={`product--thumbnail ${currentImgId==index?'active--thumbnail':''}`} 
                src={product.thumbnail[index]} onClick={()=>setCurrentImgId(index)}
                key={index}
            />
        )
    })

    function addProduct(){
        setOrderAmount(prevAmount => prevAmount + 1)
    }

    function removeProduct(){
        (orderAmount > 0) && setOrderAmount(prevAmount => prevAmount - 1)
    }

    function nextImage(){   
        if(currentImgId < products[0].images.length - 1)
            setCurrentImgId(prevId=>prevId + 1)
        
    }

    function prevImage(){
        if(currentImgId > 0)
            setCurrentImgId(prevId=>prevId - 1)
    }

    function addToCart(){
        props.setCartData(prevCart=>{
            if(prevCart.filter(cartProduct=>cartProduct.id===product.id).length>0){
                return [
                    ...prevCart.map(cartProduct=>{
                        return{...cartProduct,amount:cartProduct.amount + orderAmount}           
                    })
                ]
            }
            else {
                return [...prevCart,{...product,amount:orderAmount}]
            }
            props.setIsCartChecked(false)
        }
        )
        setOrderAmount(0)
    }

    function showImage() {      
        setLightBoxDisplay(true);
    }


    console.log('rendered',lightboxDisplay)
    return (
        <main>
            <div className="product--img--container">
                <img 
                    className='product--img' 
                    src={product.images[currentImgId]} 
                    onClick={()=>showImage()}
                />

                <div className="product--img--btn--container">
                    <button className="change--img--btn" onClick={prevImage}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className="change--img--btn" onClick={nextImage}>
                       <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>

                { lightboxDisplay ?
                    <div className="lightbox--container">
                        <button className="lightbox--close--btn" onClick={()=>setLightBoxDisplay(false)}>
                            <FontAwesomeIcon icon={faX}/>
                        </button>
                        <img className="lightbox--img" src={product.images[currentImgId]}></img>
                        
                        <div className="product--thumbnail--container">
                            {productThumbnailEl}
                        </div> 

                        <div className="lightbox--btn--container">
                            <button className="change--img--btn" onClick={prevImage}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button className="change--img--btn" onClick={nextImage}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>

                    </div>
                    :<></> 
                }

                <div className="product--thumbnail--container">
                    {productThumbnailEl}
                </div> 


            </div>


            <div className="product--info--container">
                <div className="product--info">
                    <h3>SNEAKER COMPANY</h3>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>

                <div className="product--price--info">
                    <h1>${product.price()}.00</h1>
                    <div className="price--discount"><h3>{product.discount}%</h3></div>
                    <h3 className="price--before">${product.priceBeforeDis}.00</h3>            
                </div>

                <div className="product--to--cart--container">
                    <div className="amount--btn--container">
                        <button className="amount--btn" onClick={removeProduct}>-</button>
                        <h4>{orderAmount}</h4>
                        <button className="amount--btn" onClick={addProduct}>+</button>
                    </div>
                    <button className="btn add--cart--btn" onClick={addToCart}>
                        <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
                        Add to cart
                    </button>
                </div>


            </div>
        </main>
    )
}