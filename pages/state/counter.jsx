import { useState } from "react"
import CounterDisplay from "../../components/CounterDisplay"

export default function counter() {

    const [counter, setCounter] = useState(0)

    function decrementCounter() {
        setCounter(counter-1)
    }

    function incrementCounter() {
        setCounter(counter+1)
    }

    return (
        <div style={{
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <h1>Contador</h1>
            <CounterDisplay counter={counter}/>
            <div>
                <button onClick={decrementCounter}>-</button>
                <button onClick={incrementCounter}>+</button>

            </div>
        </div>
    )
}