import React from 'react';

export default React.createContext({
    products:[
        {id:'p1',title:'React 16.6',price:'200'},
        {id:'p2',title:'Redux',price:'300'},
        {id:'p3',title:'contextAPI',price:'240'},
        {id:'p4',title:'functional component',price:'343'},
        {id:'p5',title:'class component',price:'221'}
    ],
    cart:[],
    Name:"Vikash",
    addProductToCart : (product:any) =>{
    },
    removeProductFromCart : (productId:any)=>{
    }
});