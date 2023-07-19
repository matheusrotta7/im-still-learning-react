'use client'

import "../src/app/globals.css"

import CounterDisplay from "./CounterDisplay"

export default function MegaSena(props) {

    function generateRandomNumbers(array = []) {
        if (props.number < 1) {
            throw "invalid!"
        }

        if (array.length >= props.number) {
            return array.sort((n1, n2) => n1 - n2)
        }

        const curRandom = Math.ceil(Math.random() * 60)
        if (!array.includes(curRandom)) {
            return generateRandomNumbers([...array, curRandom])
        } else {
            return generateMegaSenaNumbers([...array])
        }

    }

    function generateMegaSenaNumbers() {
        var randNums = generateRandomNumbers()
        var result = []
        for (let i = 0; i < props.number; i++) {
            result.push(<CounterDisplay key={i} counter={randNums[i]}/>)
        }
        return result
    }

    return (
        <>
            <div className="mt-4 flex">
                {generateMegaSenaNumbers()}
            </div>
        </>
    )
}