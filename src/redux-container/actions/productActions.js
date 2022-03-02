import { actionTypes } from "../constants/actionTypes";
export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (singleProduct) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: singleProduct,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODCUTS,
  };
};
