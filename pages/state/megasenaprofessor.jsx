import { useState } from "react"

import mega from '../../functions/megasena'
import CounterDisplay from "../../components/CounterDisplay"

import '../../src/app/globals.css'

export default function megasenaprof() {

    const [numbers, setNumbers] = useState(mega())

    function renderNumbers() {
        return numbers.map(n => <CounterDisplay key={n} counter={n}/>)
    }

    return (
        <div>
            <h1>MegaSena</h1>
            <div>

            </div>
        </div>
    )
}