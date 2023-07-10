export default function repetition1() {

    const approvedList = [
        'joao',
        'maria',
        'carlos',
        'kotler', 
        'turing', 
        'perdigao', 
        'abigail', 
        'mayor lewis', 
        'pam', 
        'Demetrius'   
    ]

    // function renderList() {

    //     const items = []

    //     for (let i = 0; i < approvedList.length; i++) {
    //         items.push(<li key={i}>{approvedList[i]}</li>)
    //     }

    //     return items
    // }

    function renderList() {

        return approvedList.map((name, i) => <li key={i}>{name}</li>)
    }


    return(
        <>
            <ul>
                {renderList()}
            </ul>
        </>

    )
} 