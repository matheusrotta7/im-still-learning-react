import productList from "../../data/productList"

export default function repetition2() {
    
    
    const withBorder = {
        border: "1px solid #000",
        textAlign: "center"
        
    }
    
    function renderLines() {
        // console.log(productList)
        return productList.map(product => {
            return (
                <tr key={product.id}>
                    <td style={withBorder}>{product.id}</td>
                    <td style={withBorder}>{product.prodName}</td>
                    <td style={withBorder}>{product.price}</td>
                </tr>
            )
        })
    }


    return (
        <>
            <h1>Repetition 2</h1>
            <table style={withBorder}>
                <thead>
                    <tr>
                        <th style={withBorder}>Code</th>
                        <th style={withBorder}>Name</th>
                        <th style={withBorder}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLines()}
                </tbody>
            </table>
        </>
    )
}