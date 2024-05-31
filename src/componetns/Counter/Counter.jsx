import { useState } from "react";
import Clock from "./Clock/Clock";
import Timer from "./Timer/Timer";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increseHandler = (e) => {
    e.stopPropagation();
    setTimeout(() => {
      setCounter((counter) => counter + 1);
    }, 2000);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increseHandler}>increase</button>
      <Clock />
      <Timer />
    </div>
  );
};

export default Counter;
