export const setProduct = (data) => {
  // console.log(data);
  return {
    type: "SET_PRODUCT",
    payload: data,
  };
};

export const selectedProduct = (data) => {
  return {
    type: "SELECT_PRODUCT",
    payload: data,
  };
};

export const setProductCall = () => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProduct(data)));
  };
};
