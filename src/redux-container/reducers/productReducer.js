import { actionTypes } from "../constants/actionTypes";
const InitialState = {
  products: [],
};
export const productReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      // console.log(action.payload, action.type);
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_PRODUCTS:
      return { ...state, ...action.payload };
    case actionTypes.REMOVE_SELECTED_PRODCUTS: {
      return {};
    }
    default:
      return state;
  }
};
