class Product {
    constructor(price, name) {
        if (!price) {
            throw 'Unsufficient parameters: price should be present!'
        }
        if (!name) {
            throw 'Unsufficient parameters: name should be present!'
        }
        this.name = name
        this.price = price
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }
}

module.exports = Product
