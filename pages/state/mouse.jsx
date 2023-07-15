import { useState } from "react";

export default function mouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    
    const curStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    };

    function whenMouseMoves(ev) {
        console.log(ev.clientX, ev.clientY)
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return(
        <div style={curStyle} onMouseMove={whenMouseMoves}>
            <span>Eixo x: {x}</span>
            <span>Eixo y: {y}</span>
        </div>
    )
}