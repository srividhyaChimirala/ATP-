import React, { useContext } from "react";
// import { counterContextObj } from "../contexts/ContextProvider";
import { counterContextObj } from "../contexts/ContexProvider.jsx";
import { useCounterStore } from "../stores/useCounterStore";

function Test() {
  const { counter1, changeCounter1 } =
    useContext(counterContextObj);

  const newCounter1 = useCounterStore(
    (state) => state.newCounter1
  );

  const incrementCounter1 = useCounterStore(
    (state) => state.incrementCounter1
  );

  console.log("Test");

  return (
    <div className="text-center p-5">
      <h1 className="text-4xl mb-4">
        Counter1: {counter1}
      </h1>

      <button
        onClick={changeCounter1}
        className="bg-gray-300 px-5 py-3 rounded-lg mb-6"
      >
        +1
      </button>

      <h1 className="text-4xl mb-4">
        New Counter1: {newCounter1}
      </h1>

      <button
        onClick={incrementCounter1}
        className="bg-gray-300 px-5 py-3 rounded-lg"
      >
        +1
      </button>
    </div>
  );
}

export default Test;

