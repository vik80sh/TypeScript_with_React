import React, { useContext} from 'react';
import ShopContext from './../../ContextStore/context'
import starImage from './../../Asserts/star.png'

import './cartPage.scss'
const Cart = () => {
    const context = useContext(ShopContext);
    const removeProductFromCart:any = context.removeProductFromCart;
    let cart: any = context.cart;
    let totalPrice: number = 0;
    let sizeOfCart: boolean = cart.length && cart.length > 0 ? true : false;


    if (sizeOfCart)
        return (<div className="text-capitalize cart-wrapper">
            <div className="cart-item-left">
                {cart.map((data: any, i: number) => {
                    let offeredPrice: number = data.price - (data.price * data.discountPercent / 100);
                    let priceNow = offeredPrice.toFixed(2);
                    totalPrice = totalPrice + parseInt(priceNow)
                    return <div className="item-wrapper" key={i}>
                        <div className="item-image"><img src={data.image} alt="book-img" /></div>
                        <div className="item-content">
                            <div className="item-title">{data.title}</div>
                            <div className="item-author">{data.author}</div>
                            <div className="item-rating-review">
                                <div className="rating">{data.rating} <img src={starImage} alt="star-rating" /></div>
                                <div className="reviews">({data.reviewers})</div>
                            </div>
                            <div className="item-price">
                                <div className="price-now">{priceNow}</div>
                                <div className="price-discount">
                                    <span className="prev-price">RS {data.price}</span>
                                    <span className="price-off">{data.discountPercent }% off  {Math.round(Math.random() * 5 + 1)} offers available</span>
                                </div>
                            </div>
                            <div className="remove-card-btn" onClick={() => removeProductFromCart(data.id)} ><span> REMOVE</span> </div>
                        </div> 
                        <div className="date-dliver">Delivery by Sat Jun 13 20XX | Free₹40</div>
                    </div>
                })}
            </div>
            <div className="cart-price-right">
                <p className="price-details"> PRICE DETAILS </p>
                <p className="price-item-price pad">
                    <span className="cart-price-left-1">Price ({cart.length} Item)</span>
                    <span className="cart-price-right-2">RS. {totalPrice}</span>
                </p>
                <p className="develry-charge pad">
                    <span className="cart-price-left-1">Delivery Fee</span>
                    <span className="cart-price-right-2">{cart.length * 40}</span>
                </p>
                <p className="total-price pad">
                    <span className="cart-price-left-1">Total Amount</span>
                    <span className="cart-price-right-2">RS {cart.length * 40 + totalPrice}</span>
                </p>
            </div>
        </div>)
    else
        return <div className="no-items">No any item in cart</div>
}


export default Cart;



/*

 useEffect(()=>{
        console.log(context)
    },[])

it will run only once which it inialize;
if you want to run on particular data change then you have to pass that
data in [] array
*/