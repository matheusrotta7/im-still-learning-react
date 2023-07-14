export default function SonInd(props) {
    // We want to pass information from the son to the father
    // We will use indirect communication

    console.log("props" + props.speakFunction)

    return (
        <>
            <h1>The son</h1>
            <button onClick={() => props.speakFunction("Passei no Enem, pai!", "Uhuuuuu")}>Talk with father</button>
            <button onClick={(e) => props.speakFunction(e)}>Give back click event</button>
        </>
    )
}