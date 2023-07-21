import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAction, decrementAction } from "../Actions/Action";

function Counter1() {
  const storeValue = useSelector((state) => {
    return state.count;
    // console.log(state);
  });

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementAction());
  };

  const decrement = () => {
    dispatch(decrementAction());
  };
  return (
    <div>
      <button onClick={increment}>+</button>
      <div>Counter is {storeValue}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
}
export default Counter1;
