import React, { useContext, useEffect } from 'react';
import ShopContext from './../../ContextStore/context'

const Cart = () => {
    const context = useContext(ShopContext);

    useEffect(()=>{
        console.log(context)
    },[])

    return (<div>Cart page</div>)
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