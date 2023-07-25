import { useEffect, useState } from "react"

import mega from '../../functions/megasena'
import CounterDisplay from "../../components/CounterDisplay"

import '../../src/app/globals.css'

export default function megasenaprof() {

    const [numbers, setNumbers] = useState([])
    const [numOfBalls, setNumberOfBalls] = useState(6)

    useEffect(() => {
        setNumbers(mega())
    }, [])

    function renderNumbers() {
        return numbers.map(n => <CounterDisplay key={n} counter={n}/>)
    }

    
    return (
        <div>
            <h1>MegaSena</h1>
            <div className="flex">
                {renderNumbers()}
            </div>
            <div>

                <span>Number of balls: </span> <input type="number" min={6} max={20} value={numOfBalls} onChange={(e) => setNumberOfBalls(e.target.value)}/>
                <button onClick={() => setNumbers(mega(numOfBalls))}>Generate Balls</button>
            </div>
        </div>
    )
}