
const initialState = {
  cart: []
}

export const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload]
    };
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: []
    };
  } else if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter(prod => prod.id !== Number(action.payload))
    }
  }
  return state;
}