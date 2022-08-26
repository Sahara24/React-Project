export const loginInitialState = {
  loading: false,
  userDetails: {},
  error: ''
};

export const loginReducer = (state = loginInitialState, action) => {
  // console.log(state)
  if (action.type === 'LOG_OUT') {
    return {
      ...state,
      userDetails: {}
    }
  } else if (action.type === 'login-success') {
    return {
      ...state,
      loading: false,
      userDetails: action.payload
    }
  } else if (action.type === 'login-failure') {
    return {
      ...state,
      loading: false,
      error: action.payload
    }
  }
  return state;
}