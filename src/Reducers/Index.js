import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducer";
import { loginReducer } from "./loginReducer";

import { productReducer } from "./Reducer";

const combinedReducer = combineReducers({
  allProducts: productReducer,
  carts: cartReducer,
  login: loginReducer,
});
export const store = createStore(combinedReducer, applyMiddleware(thunk));
