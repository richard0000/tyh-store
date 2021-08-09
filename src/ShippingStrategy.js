class ShippingStrategy {
    constructor(sale, deliveryDate) {
        this.sale = sale
        this.deliveryDate = deliveryDate
    }

    shippingCost() {
        throw 'Must be defined in child classes'
    }

    getDeliveryDate() {
        return this.deliveryDate
    }
}

module.exports = ShippingStrategy
