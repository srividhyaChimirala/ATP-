import { createContext, useState } from 'react';

export const counterContextObj = createContext();

function ContexProvider({ children }) {

    const [counter, setCounter] = useState(10);

    const changeCounter = (value) => {
        setCounter(value);
    };

    return (
        <counterContextObj.Provider
            value={{
                counter,
                changeCounter
            }}
        >
            {children}
        </counterContextObj.Provider>
    );
}

export default ContexProvider;