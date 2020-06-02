export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

interface actionType {
    type: String,
    payload: any
}
interface stateType {
    cart: any
}


const addProductToCart = (product: object,cart:any) => {
    let updatedCart: object = [...cart, product];
    return updatedCart;
}
const removeProductFromCart = (productId: any,cart:any) => {
}
export const shopReducer = (state: stateType, action: actionType) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.payload,state.cart);
        case REMOVE_PRODUCT:
            return removeProductFromCart(action.payload,action.payload);
        default:
            return state
    }
}