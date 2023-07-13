import If from "../../components/If";

export default function conditional2() {

    const number = 5

    return (
        <>
            <div>Hello World</div>
            <If test={number % 2 === 0}>
                The number {number} is even
            </If>
            <If test={number % 2 === 1}>
                The number {number} is odd
            </If>
        </>
    )
}