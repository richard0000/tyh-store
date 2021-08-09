const SaleState = require('./SaleState')
const TraditionalShipping = require('./TraditionalShipping')

class Received extends SaleState {
    constructor(sale) {
        super(sale)
    }

    accept() {
        this.sale.setState(this.sale.getAcceptedState())
        this.sale.getState().updateStock()
        this.sale.setPaidAt(new Date())
        this.sale.setShippingStrategy(
            new TraditionalShipping(this.sale, new Date())
        )
    }

    cancel() {
        this.sale.setState(this.sale.getCancelledState())
    }

    deliver() {
        throw 'Unpermitted operation'
    }

    receive() {
        throw 'Unpermitted operation'
    }

    updateStock() {
        this.sale.getRows().forEach((row) => {
            const product = row.getProductVariant()
            product.setStock(product.getStock() + row.getQty())
        })
    }
}

module.exports = Received
