/*
my goal here is this:

    <div>
        <span>1,</span>
        <span>2,</span>
        <span>3,</span>
        <span>4,</span>
        <span>5,</span>
        <span>6,</span>
        <span>7,</span>
        <span>8,</span>
        <span>9,</span>
        <span>10,</span>
    </div>
*/

export default function list() {

    // var array = [<span>1,</span>, <span>1,</span>, <span>1,</span>, <span>1,</span>, <span>1,</span>   ]

    return (
        <div>
            <div>
                {createSpanArray(42)}
            </div>

            <div>
                {createSpanArray()}
            </div>
        </div>
    )

}

function createSpanArray(numOfSpans = 10) { //using default value 10
    var result = [];
    var i;
    for (i = 1; i <= numOfSpans; i++) {
        if (i == numOfSpans) {
            result.push(<span>{i}</span>)
        } else {
            result.push(<span>{i},</span>);
        }
    }
    return result;
}