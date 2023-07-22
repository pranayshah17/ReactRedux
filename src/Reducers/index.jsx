import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";

const allReducers = combineReducers({
  allProducts: productReducer,
});

export default allReducers;
