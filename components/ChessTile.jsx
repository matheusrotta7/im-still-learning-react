import "../pages/basics/css/chessstyle.css"

export default function ChessTile(props) {

    const styleClass = (props.x  + props.y) % 2 == 0 ? "whitetile" : "blacktile" 

    return (
        <>
            <div className={styleClass}>.</div>
        </>
    )
}