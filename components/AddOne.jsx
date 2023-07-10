export default function AddOne (props) {

    /*
    This example wants to show that props is read only, if we try to modify the property
    like for instance incrementing a counter it will return an error in the screen
    */
    // props.numero++

    return (
        <>
            <h1>{props.numero + 1}</h1>
        </>
    )
}