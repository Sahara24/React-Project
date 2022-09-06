import { loginInitialState } from "./loginReducer";

export const AddToCart = (data) => {
  // console.log(data);
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const removeFromCart = (data) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: data
  }
}

export const removeOneItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  }
}

export const signOut = () => {
  return {
    type: 'LOG_OUT'
  }
}

export const loginSuccessful = (data) => {
  return {
    type: 'login-success',
    payload: data
  }
}

export const loginFailure = (msg) => {
  return {
    type: 'login-failure',
    payload: msg
  }
}


export const userLogin = (data) => {
  return (dispatch) => {
    if (Object.keys(loginInitialState.userDetails).length >= 0) {
      dispatch(loginSuccessful(data));
    } else {
      dispatch(loginFailure("error"));
    }
  }
}
