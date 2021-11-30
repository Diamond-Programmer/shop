import { combineReducers } from "redux";
import { cartReducer } from "../modules/cart/cartReducer";


export const rootReducer = combineReducers({
    cart:cartReducer
})

