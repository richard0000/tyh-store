const SaleState = require('./SaleState')

class Delivered extends SaleState {
    constructor(sale) {
        super(sale)
        this.deliveredAt = new Date()
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

    getDeliveredDate() {
        return this.deliveredAt
    }

    updateStock() {
        throw 'Unpermitted operation'
    }
}

module.exports = Delivered
