const Subscription = require('./Subscription')

class BySalesQty extends Subscription {
    constructor(
        costPerUpsell = 1,
        monthlySubscriptionCost = 200,
        sales = [],
        salesLimit = 300
    ) {
        super()
        this.costPerUpsell = costPerUpsell
        this.monthlySubscriptionCost = monthlySubscriptionCost
        this.sales = sales
        this.salesLimit = salesLimit
    }

    getCostPerUpsell() {
        return this.costPerUpsell
    }

    getMonthlySubscriptionCost() {
        return this.monthlySubscriptionCost
    }

    getSales() {
        return this.sales
    }

    getSalesLimit() {
        return this.salesLimit
    }

    monthlyCost() {
        return this.monthlySubscriptionCost + this.calculateAdditionalCost()
    }

    calculateAdditionalCost() {
        let additionalCost = 0
        if (this.sales.length > this.salesLimit) {
            additionalCost =
                this.costPerUpsell * (this.sales.length - salesLimit)
        }

        return additionalCost
    }
}

module.exports = BySalesQty
