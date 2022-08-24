import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./Reducer";

const combinedReducer = combineReducers({
  allProducts: productReducer,
});
export const store = createStore(combinedReducer, applyMiddleware(thunk));
