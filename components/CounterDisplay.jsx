export default function CounterDisplay(props) {
    return (
        <div style={{
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: "#222",
            color: "#fff",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            fontSize: "2rem",
            margin: "20px"
        }}>
            {props.counter}
        </div>
    )
}