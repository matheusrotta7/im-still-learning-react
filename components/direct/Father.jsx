import Son from "./Son";

export default function Father(props) {

    return (
        <>
            <h1>{props.surname} Family</h1>
            <Son name="Prince" surname={props.surname} />
            <Son name="Nastassia" surname={props.surname} />
            <Son {...props} name="?" />
        </>
    )
}