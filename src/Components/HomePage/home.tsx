import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import ShopContext from './../../ContextStore/context'
import Product from './../ProductPage/productPage';
import Cart from './../CartPage/cartPage';

export default class Home extends React.Component {
    state = {
        products: [
            { id: 'p1', title: 'React 16.6', price: '200' },
            { id: 'p2', title: 'Redux', price: '300' },
            { id: 'p3', title: 'contextAPI', price: '240' },
            { id: 'p4', title: 'functional component', price: '343' },
            { id: 'p5', title: 'class component', price: '221' }
        ],
        name: "Vikash",
        cart: []
    }
   
    addProductToCart = (product: any) => {
        console.log("======add=========")
    }
    removeProductFromCart = (productId: any) => {
        console.log("=======remove=======")
    }
    render() {
        return (
            <ShopContext.Provider
                value={{
                    products: this.state.products,
                    cart: this.state.cart,
                    name: this.state.name,
                    addProductToCart: this.addProductToCart,
                    removeProductFromCart: this.removeProductFromCart
                }}>

                <Switch>
                    <Route path='/' component={Product} exactly />
                    <Route path='/cart' component={Cart} exactly />
                </Switch>
            </ShopContext.Provider>
        )
    }
}