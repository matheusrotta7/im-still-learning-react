export default function OnlyEven(props) {
    const isEven = props.number % 2 === 0;

    return (
        <div>
            {
                isEven ? 
                    <span>{props.number}</span> : 
                    null
            }
        </div>
    )
    
}