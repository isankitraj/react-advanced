import { useReducer, useState } from "react";
import counterReducer from "./counterReducer";
import useCounterStore from "./store";

const Counter = () => {
  // const [value, setValue] = useState(0);

  // const [value, dispatch] = useReducer(counterReducer, 0);

  const { counter, increment, reset } = useCounterStore();

  // console.log(value);

  return (
    <div>
      Counter ({counter})
      <button
        // onClick={() => dispatch({ type: "INCREMENT" })}
        onClick={() => increment()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        // onClick={() => dispatch({ type: "RESET" })}
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div> 
  );
};

export default Counter;
