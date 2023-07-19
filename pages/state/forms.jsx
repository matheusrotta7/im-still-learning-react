import { useState } from "react"

export default function forms() {

    const [value, setValue] = useState("inicial")

    const [otherValue, setOtherValue] = useState("inicial")

    function addExclamation() {
        setOtherValue(otherValue + "!")
    }

    return (
        <div>
            <div>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
            </div>
            
        </div>
    )
}