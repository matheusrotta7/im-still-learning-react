export default function List(props) {

    return (
        <>
            <h1>Lista de algo</h1>
            <ul style={{
                listStyle: "-moz-initial",
                padding: 15
            }}>

                {props.children}

            </ul>
        </>
    )
}