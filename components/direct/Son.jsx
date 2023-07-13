export default function Son(props) {

    return(
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                
            }}>
                <h3 style={{
                    margin: 10
                }}>{props.name}</h3>
                <h2>{props.surname}</h2>
            </div>
        </>
    )
}