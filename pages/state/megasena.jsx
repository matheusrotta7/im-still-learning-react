import { useState } from "react"
import CounterDisplay from "../../components/CounterDisplay"
import MegaSena from "../../components/MegaSena"

export default function counter() {

    const [number, setNumber] = useState(0)

    return (
        <div>
            <h1>Contador</h1>
            <span>Number of random numbers: </span> <input type="number" onChange={e => setNumber(e.target.value)}/>
            <MegaSena number={number} />
            <MegaSena number={number} />
        </div>
    )
}