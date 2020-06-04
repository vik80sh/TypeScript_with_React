export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";


const addProductToCart = (product: object,cart:any) => {
    let updatedCart={
        cart:  [...cart.cart, product]
    }
    return updatedCart;
}
const removeProductFromCart = (id: any,cart:any) => {
    let updatedCart={
        cart:  cart.cart.filter((data:any)=>data.id!==id)
    }
    return updatedCart;

}
export const shopReducer = (state:any, action:any) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.payload,state);
        case REMOVE_PRODUCT:
            return removeProductFromCart(action.payload,state);
        default:
            return state
    }
}