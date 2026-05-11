import React, { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function EditCounter1() {
  const {
    counter,
    ChangeCounterAdd,
    ChangeCounterSub,
  } = useContext(counterContextObj);

  return (
    <div className="text-center p-4 m-4">
      <h1 className="text-4xl mb-5">
        EditCounter1
      </h1>

      <div className="bg-amber-500 max-w-md mx-auto p-6 rounded-xl">
        <h1 className="text-3xl text-center mb-6">
          {counter}
        </h1>

        <div className="flex justify-center gap-4">
          <button
            onClick={ChangeCounterAdd}
            className="bg-violet-800 text-white px-6 py-3 rounded-lg"
          >
            +
          </button>

          <button
            onClick={ChangeCounterSub}
            className="bg-violet-800 text-white px-6 py-3 rounded-lg"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditCounter1;

