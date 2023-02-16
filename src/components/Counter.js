import React from 'react';
import { useState } from 'react';


function Counter() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)

    }

    function decerement() {
        if (counter != 0) {
            setCounter(counter - 1)
        }
    }

    function reset() {
        setCounter(0)
    }


    return (
        <div className='App'>
            <div className='counter'>
                <div class="rotate">
                    <div>
                        <h3 class="heading">
                            <span>Y</span>
                            <span>o</span>
                            <span>u</span>
                            <span>r</span>
                            <span>T</span>
                            <span>u</span>
                            <span>r</span>
                            <span>n</span>
                            <span>!</span>

                        </h3>
                    </div>
                </div>
                <div className='count'>
                    <h1>{counter}</h1>
                </div>
                <div className='button'>
                    <button onClick={increment}>Add➕</button> 
                    <button onClick={decerement}>Subtract➖</button> 
                    <button onClick={reset}>Reset🔄️</button>

                </div>
            </div>
        </div>
    )
}

export default Counter