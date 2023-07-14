function action1() {
    console.log("action 1")
}

export default function button() {

    function action2() {
        console.log("action 2")
    }

    function acao5(e) {
        console.log(e)
    }

    return(
        <>
            <button onClick={action1}>Click #01</button>
            <button onClick={action2}>Click #02</button>
            <button onClick={function() {
                console.log("action 3")
            }}>Click #03</button>
            <button onClick={() => console.log("action 4")}>
                Click #04
            </button>
            <button onClick={acao5}>
                Click #05
            </button>
            <button onClick={e => acao5(e.altKey)}>
                Click #05 v2
            </button>

            <div style={{
                marginTop: 100
            }}>
                <span>****************Having fun with input buttons************************</span>

                <div>
                    <input type="datetime-local" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="date" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="checkbox" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="file" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="password" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="email" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="text" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="color" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="image" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="month" onChange={e => console.log(e.target.value)}></input>
                </div>
                <div>
                    <input type="week"  onChange={e => console.log(e.target.value)}></input>
                </div>
            </div>
        </>
    )
}