import { useState } from "react"

export default function counter() {

    const [counter, setCounter] = useState(0)

    function decrementCounter() {
        setCounter(counter-1)
    }

    function incrementCounter() {
        setCounter(counter+1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {counter}</div>
            <button onClick={decrementCounter}>-</button>
            <button onClick={incrementCounter}>+</button>
        </div>
    )
}