const SaleState = require('./SaleState')

class Accepted extends SaleState {
    constructor(sale) {
        super(sale)
    }

    accept() {
        throw 'Unpermitted operation'
    }

    cancel() {
        this.sale.setState(this.sale.getCancelledState())
    }

    deliver() {
        this.sale.setState(this.sale.getDeliveredState())
    }

    receive() {
        this.sale.setState(this.sale.getReceivedState())
        this.sale.getState().updateStock()
    }

    updateStock() {
        this.sale.getRows().forEach((row) => {
            const product = row.getProductVariant()
            product.setStock(product.getStock() - row.getQty())
        })
    }
}

module.exports = Accepted
