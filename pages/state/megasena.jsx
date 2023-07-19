import { useState } from "react"
import CounterDisplay from "../../components/CounterDisplay"
import dynamic from 'next/dynamic'

const MegaSena = dynamic(() => import('../../components/MegaSena'), { ssr: false })

export default function counter() {

    const [number, setNumber] = useState(6)

    return (
        <div>
            <h1>Contador</h1>
            <span>Number of random numbers: </span> <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
            <MegaSena number={number} />
            <MegaSena number={number} />
        </div>
    )
}