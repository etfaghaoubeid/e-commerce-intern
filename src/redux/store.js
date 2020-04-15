import {createStore ,applyMiddleware} from "redux"
import rootReducer from "./root-reducer"
import {persistStore} from "redux-persist"
import logger from "redux-logger"

const store = createStore(rootReducer, applyMiddleware(logger))
const persistor = persistStore(store)

export  {store,persistor }