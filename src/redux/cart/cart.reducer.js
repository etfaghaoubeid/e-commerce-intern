import {TOGGLE_CART, ADD_ITEM,REMOVE_ITEM,INCREASE_QUANTITY,DECREASE_QUANTITY} from "./cart.actions.types"
import {addItemToCart,removeItemFromCart,increaseQuantity,decreaseQuantity} from "./cart.utils"
const initState={
    isOpen: true, 
    items:[]

}

const cartReducer = (state=initState , action)=>{
    switch(action.type){
        case TOGGLE_CART:
            return {
                ...state, 
                isOpen: !state.isOpen
            }
        case ADD_ITEM:
            return{
                ...state ,
                items: addItemToCart(state.items , action.payload)
            }  
        case REMOVE_ITEM:
            return{
                ...state,
                items:removeItemFromCart(state.items, action.payload)
            }
        case INCREASE_QUANTITY:
            return{
                ...state,
                items:increaseQuantity(state.items , action.payload)
            }    
        case DECREASE_QUANTITY:
            return{
                ...state,
                items:decreaseQuantity(state.items , action.payload)
                }        
        default:
            return state;
    }
}
export default cartReducer;