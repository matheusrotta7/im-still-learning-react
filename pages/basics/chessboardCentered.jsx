import Chessboard from "./chessboard";

export default function chessboardCentered() {

    //this is not yet working


    return (

        <>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: "100%",
            }}>
                <Chessboard/>
            </div>
        </>
    )
}