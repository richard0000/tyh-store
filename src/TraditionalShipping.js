const ShippingStrategy = require('./ShippingStrategy')

class TraditionalShipping extends ShippingStrategy {
    constructor(sale, deliveryDate) {
        super(sale, deliveryDate)
        this.deliveryDate = new Date()
        this.deliveryDate.setDate(sale.getPaidAt().getDate() + 4)
    }

    shippingCost() {
        return 450
    }
}

module.exports = TraditionalShipping
