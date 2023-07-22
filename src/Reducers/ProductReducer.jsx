import { ActionTypes } from "../Actions/Action_type";

const initialState = {
  products: {
    id: 1,
    title: "pranay",
    category: "programmer",
  },
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
