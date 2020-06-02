import React from 'react';
import { Route, Switch } from 'react-router-dom'

import GlobalState from './../../ContextStore/globalState'
import Product from './../ProductPage/productPage';
import Cart from './../CartPage/cartPage';

const Home = (props:object) => {
    return (
        <GlobalState>
            <Switch>
                <Route path='/' component={Product} exact={true} />
                <Route path='/cart' component={Cart} exact={true} />
            </Switch>
        </GlobalState>
    )

}



export default Home;

/*

contextAPI should not use for high frquency data changes
ContextAPi is not replacement for Redux, it is not ideall

 */