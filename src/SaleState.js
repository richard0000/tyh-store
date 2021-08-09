class SaleState {
    constructor(sale) {
        if (!sale) throw 'Unsufficient parameters: sale should be present'
        this.sale = sale
    }

    accept() {
        throw 'Should be implemented in child class'
    }

    cancel() {
        throw 'Should be implemented in child class'
    }

    deliver() {
        throw 'Should be implemented in child class'
    }

    receive() {
        throw 'Should be implemented in child class'
    }

    updateStock() {
        throw 'Should be implemented in child class'
    }
}

module.exports = SaleState
