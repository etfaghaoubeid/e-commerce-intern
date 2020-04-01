import {ADD_ITEM, REMOVE_ITEM, TOGGLE_CART} from "./cart.actions.types";
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