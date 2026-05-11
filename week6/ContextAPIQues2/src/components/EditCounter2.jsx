import { useContext } from 'react';
import { counterContextObj } from '../contexts/ContexProvider';

function EditCounter2() {

    const {
        counter,
        changeCounter
    } = useContext(counterContextObj);

    const increment = () => {
        changeCounter(counter + 1);
    };

    const decrement = () => {
        changeCounter(counter - 1);
    };

    return (
        <div className='text-4xl text-center'>

            <h1 className='mb-5'>
                EditCounter2
            </h1>

            <div className='bg-amber-500'>

                <h1 className='pt-5'>
                    {counter}
                </h1>

                <button
                    className='px-6 py-2 m-10 bg-red-500'
                    onClick={increment}
                >
                    +
                </button>

                <button
                    className='px-6 py-2 m-10 bg-green-400'
                    onClick={decrement}
                >
                    -
                </button>

            </div>
        </div>
    );
}

export default EditCounter2;
