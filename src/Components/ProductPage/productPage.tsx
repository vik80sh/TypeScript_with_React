import React, { Component } from 'react';
import ShopContext from './../../ContextStore/context'
import starImage from './../../Asserts/star.png'
import './productPage.scss'

export default class Product extends Component {
    static contextType = ShopContext;
    render() {
        return (
            <div className="product-wrapper">
                <div className="product-wrapper-left"> 
                    Future task sorting and filter
                </div>
                <div className="product-wrapper-right">
                    {this.context.products.map((data: any, i: number) => {
                        let offeredPrice: number = data.price - (data.price * data.discountPercent / 100);
                        let priceNow = offeredPrice.toFixed(2);
                        let isPresentIncard = this.context.cart.find((obj:any) => obj.id === data.id);
                        isPresentIncard = isPresentIncard && isPresentIncard.id ? true : false
                        
                        return <div className="product-list" key={i}>
                                <div className="product-image"><img src={data.image} alt="book-img" /></div>
                                <div className="text-capitalize product-details">
                                    <div className="products-title">{data.title}</div>
                                    <div className="products-author">{data.author}</div>
                                    <div className="products-rating-review">
                                        <div className="rating">{data.rating} <img src={starImage} alt="star-rating" /></div>
                                        <div className="reviews">({data.reviewers})</div>
                                    </div>
                                    <div className="products-price">
                                        <div className="price-now">{priceNow}</div> 
                                        <div className="price-discount">
                                                <span className="prev-price">RS {data.price}</span>
                                                <span className="price-off">{data.discountPercent }% off</span>
                                        </div>
                                    </div>
                                    <div className="add-to-cart-btn">
                                        {!isPresentIncard ? <button className="btn btn-primary" onClick={() =>this.context.addProductToCart(data)}>
                                            Add to cart
                                        </button> :
                                        <button className="btn btn-danger" onClick={() =>this.context.removeProductFromCart(data.id)}>
                                            Remove from cart
                                        </button>}
                                    </div>
                                </div>
                            </div>
                            })}
                </div>
            </div>

                )
            }
        
        }
        
        
        /*
we can use  <ShopContext.Consumer> for consume property.
 render() {
        return (
            <ShopContext.Consumer>
                        {context => (
                            <div className="product-wrapper">
                                {context.products.map((data, i) => {
                                    return <div className="product-list" key={i}>
                                        <div className="products-id"><p className="field-title">Book ID :</p> <p className="field-value">{data.id}</p></div>
                                        <div className="products-title"><p className="field-title">Title :</p> <p className="field-value">{data.title}</p> </div>
                                        <div className="products-price"><p className="field-title">Price :</p> <p className="field-value">{data.price}</p></div>
                                        <div className="add-to-cart-btn"><button>Add to cart</button></div>
                                    </div>
                                })}
                            </div>
                        )}
                    </ShopContext.Consumer>
                    )
                }
            
            let's try other method which will work only in class component
            and react v >= 16.6
            static contextType = ShopContext
            so if you want to excess multiple context you can use
            and you can use context value in life cycle
            
            
            
            
            */
