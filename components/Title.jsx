export default function Title(props) {

    return props.small ? (
        <>
            <p>{props.primary}</p>
            <p>{props.secondary}</p>
        </>
    ) : (
        <>
            <h1>{props.primary}</h1>
            <h2>{props.secondary}</h2>
        </>
    )

}