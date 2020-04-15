import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import cartReducer from "./cart/cart.reducer"
import shopReducer from "./shop/shop.reducer";
const persistConfig = {
    key: 'root',
  storage,
  Whitelist:["cart"]
  }
const rootReducer = combineReducers({
    cart:cartReducer,
    shop:shopReducer
})
const persistRootReducer = persistReducer(persistConfig, rootReducer);
export default persistRootReducer;