class SaleRow {
    constructor(productVariant, qty = 1) {
        if (!productVariant) {
            throw 'Unsufficient parameters: productVariant should be present!'
        }
        this.productVariant = productVariant
        this.qty = qty
    }

    getProductVariant() {
        return this.productVariant
    }

    getQty() {
        return this.qty
    }

    calculateCost() {
        return this.productVariant.getProduct().getPrice() * this.qty
    }
}

module.exports = SaleRow
