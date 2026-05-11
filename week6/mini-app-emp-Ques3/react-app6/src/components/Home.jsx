
import React, { useContext } from "react";
import { counterContextObj } from "../contexts/ContexProvider";
import { useCounterStore } from "../stores/useCounterStore";
import Test from "../contexts/test";

function Home() {
  const newCounter = useCounterStore((state) => state.newCounter);
  const incrementCounter = useCounterStore(
    (state) => state.incrementCounter
  );
  const newCounter3 = useCounterStore((state) => state.newCounter3);
  const reset = useCounterStore((state) => state.reset);

  const { counter, changeCounter, user, changeEmail } =
    useContext(counterContextObj);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl mb-4">Counter: {counter}</h1>

      <button
        onClick={changeCounter}
        className="bg-amber-500 text-white px-5 py-2 rounded mb-6"
      >
        Change Counter
      </button>

      <h1 className="text-3xl mb-4">New Counter: {newCounter}</h1>

      <button
        onClick={incrementCounter}
        className="bg-blue-500 text-white px-5 py-2 rounded mb-6"
      >
        Increment Counter
      </button>

      <h1 className="text-3xl mb-4">User: {user}</h1>

      <button
        onClick={changeEmail}
        className="bg-green-500 text-white px-5 py-2 rounded mb-6"
      >
        Change Email
      </button>

      <h1 className="text-3xl mb-4">New Counter 3: {newCounter3}</h1>

      <button
        onClick={reset}
        className="bg-red-500 text-white px-5 py-2 rounded mb-6"
      >
        Reset Counter
      </button>

      <Test />
    </div>
  );
}

export default Home;