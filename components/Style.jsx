export default function Style(props) {

    const backgroundColor = 123

    return (
        <>
            <div>
                <h1 style={{backgroundColor: props.numero >= 0 ? "#2D2" : "#D22",
                            color: props.color,
                            textAlign: props.right ? "right" : "left"
                }}>
                    Texto
                </h1>
            </div>
        
        </>
    )
}