const ShippingStrategy = require('./ShippingStrategy')

class Immediatedelivery extends ShippingStrategy {
    constructor(sale, deliveryDate) {
        super(sale, deliveryDate)
        this.deliveryDate = new Date()
        this.deliveryDate.setDate(sale.getPaidAt().getDate() + 1)
    }

    shippingCost() {
        return 700
    }
}

module.exports = Immediatedelivery
