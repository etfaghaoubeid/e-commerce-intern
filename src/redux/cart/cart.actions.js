import {ADD_ITEM, REMOVE_ITEM, TOGGLE_CART,INCREASE_QUANTITY,DECREASE_QUANTITY} from "./cart.actions.types";
export const toggleCart = ()=>({
    type:TOGGLE_CART
})
export const addItem =item=>({
    type:ADD_ITEM,
    payload:item
});
export const  removeItem = item=>({
    type:REMOVE_ITEM, 
    payload:item
})
export const increaseQuantity = item=>({
    type:INCREASE_QUANTITY,
    payload:item
})
export const decreaseQuantity = item=>({
    type:DECREASE_QUANTITY,
    payload:item
})