'use client'

import "../src/app/globals.css"

import CounterDisplay from "./CounterDisplay"

export default function MegaSena(props) {

    function generateMegaSenaNumbers() {
        var result = []
        for (let i = 0; i < props.number; i++) {
            result.push(<CounterDisplay counter={Math.ceil(Math.random() * 60)}/>)
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