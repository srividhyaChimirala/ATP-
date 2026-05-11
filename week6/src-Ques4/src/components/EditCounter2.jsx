import React, { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function EditCounter2() {
  const {
    counter,
    ChangeCounterAdd,
    ChangeCounterSub,
  } = useContext(counterContextObj);

  return (
    <div>
      <div className="text-center p-4 m-4">
        <h1 className="text-4xl">
          EditCounter2
        </h1>

        <div className="bg-amber-500 max-w-md m-auto p-4">
          <h1 className="text-3xl text-center m-4">
            {counter}
          </h1>

          <div className="flex justify-center gap-3">
            <button
              onClick={ChangeCounterAdd}
              className="bg-violet-800 p-4 text-white"
            >
              +
            </button>

            <button
              onClick={ChangeCounterSub}
              className="bg-violet-800 p-4 text-white"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCounter2;
