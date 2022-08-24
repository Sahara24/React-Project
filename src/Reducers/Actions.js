export const setProduct = (data) => {
  // console.log(data);
  return {
    type: "SET_PRODUCT",
    payload: data,
  };
};

export const selectProduct = (data) => {
  return {
    type: "SELECT_PRODUCT",
    payload: data,
  };
};

export const removeProduct = () => {
  return {
    type: "REMOVE_PRODUCT",
    payload: []
  }
}

export const LoginStart = () => {
  return {
    type: "LOGIN_START",
  }
}

export const LoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data
  }
}

export const LoginFailure = (err) => {
  return {
    type: "LOGIN_FAILURE",
    payload: err
  }
}


export const setLogin = () => {
  return (dispatch) => {

  }
}
