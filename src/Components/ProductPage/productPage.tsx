import React, { Component } from 'react';
import ShopContext from './../../ContextStore/context'
import './productPage.scss'

export default class Product extends Component {
    static contextType = ShopContext;
    componentDidMount() {
        console.log("= === + + context Type + + + + ", this.context)
    }
    render() {
        return (
            <div className="product-wrapper">
                {this.context.cart.length}
                {this.context.products.map((data: any, i: number) => {
                    let offerPercentage = Math.round((Math.random() * 70));
                    let offeredPrice:number = data.price - (data.price * offerPercentage / 100);
                    let priceNow = offeredPrice.toFixed(2)
                    return <div className="product-list" key={i}>
                        <div className="product-image"><img src={data.image} alt="image" /></div>
                        <div className="product-details">
                            <div className="products-title">{data.title}</div>
                <div className="products-price"><p className="field-title">{priceNow}</p> <p className="field-value">{data.price+" "} {offerPercentage}</p></div>
                            <div className="add-to-cart-btn"><button onClick={(data) => this.context.addProductToCart(data)}>Add to cart</button></div>
                        </div>

                    </div>
                })}
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
