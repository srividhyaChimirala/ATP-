
import { createContext, useState } from 'react'

// Create context object
export const counterContextObj = createContext()

function ContextProvider({ children }) {
  // State
  const [counter, setCounter] = useState(0)

  // Function to increment counter
  const ChangeCounterAdd = () => {
    setCounter(counter + 1)
  }

  // Function to decrement counter
  const ChangeCounterSub = () => {
    setCounter(counter - 1)
  }

  return (
    <counterContextObj.Provider
      value={{
        counter,
        ChangeCounterAdd,
        ChangeCounterSub,
      }}
    >
      {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider
