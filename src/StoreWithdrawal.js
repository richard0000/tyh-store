const ShippingStrategy = require('./ShippingStrategy')

class StoreWithdrawal extends ShippingStrategy {
    constructor(sale, withdrawalDate) {
        super(sale, withdrawalDate)
        this.withdrawalDate = withdrawalDate
    }

    getWithdrawalDate() {
        return this.withdrawalDate
    }

    shippingCost() {
        return 0
    }
}

module.exports = StoreWithdrawal
