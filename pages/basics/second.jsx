export default function second() {

    const subtitle = "teste 123"

    return (
        <div>
            <h1>Segundo</h1>
            <h2>Hello, World!</h2>
            <div className="bg-gray-500">yapper dapper</div>
            <h3>{subtitle}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>is it between? {between(32, 10, 40)}</h5>
        </div>
    )
}

function between(value, min, max) {
    if (value >= min && value <= max) {
        return "yes";
    } else {
        return "no";
    }
}