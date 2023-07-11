export default class Product {

    #id 
    #prodName
    #price

    constructor(id, prodName, price) {
        this.#id = id
        this.#prodName = prodName
        this.#price = price
    }

    get price() {
        return this.#price
    }

    get id() {
        return this.#id
    }

    get prodName() {
        return this.#prodName
    }
}