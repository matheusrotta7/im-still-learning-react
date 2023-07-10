import ChessTile from "../../components/ChessTile";
import "../../src/app/globals.css"

function chessTileArray(line) {
    var array = []
    for (let i = 0; i < 8; i++) {
        array.push(<ChessTile x={line} y={i}/>)
    }
    return array;
}

function ChessLine(props) {
    return (
        <div style={{
            display:"flex",
            flexDirection:"row"
        }}>
                {chessTileArray(props.line)}
        </div>
    )
}

function chessLineArray () {
    var array = []
    for (let i = 0; i < 8; i++) {
        array.push(<ChessLine line={i} />)
    }
    return array;
}


export default function Chessboard() {

    


    return (

        <>
            
            {chessLineArray()}
        </>
    )
}