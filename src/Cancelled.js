const SaleState = require('./SaleState')

class Cancelled extends SaleState {
    constructor(sale) {
        super(sale)
    }

    accept() {
        throw 'Unpermitted operation'
    }

    cancel() {
        throw 'Unpermitted operation'
    }

    deliver() {
        throw 'Unpermitted operation'
    }

    receive() {
        throw 'Unpermitted operation'
    }

    updateStock() {
        throw 'Unpermitted operation'
    }
}

module.exports = Cancelled
