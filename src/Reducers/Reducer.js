export const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  if (action.type === "SET_PRODUCT") {
    return { ...state, products: action.payload };
  } else if (action.type === "SELECT_PRODUCT") {
    return state;
  }
  return state;
};
