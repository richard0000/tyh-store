const Subscription = require('./Subscription')

class ByPercentage extends Subscription {
    constructor(commissionPercentage = 0, sales = []) {
        super()
        this.commissionPercentage = commissionPercentage
        this.sales = sales
    }

    monthlyCost() {
        return this.sales.length ? this.calculateCostByPercentage() : 0
    }

    calculateCostByPercentage() {
        return this.sales.reduce((sum, sale) => sum + sale.totalProductsCost())
    }
}

module.exports = ByPercentage
