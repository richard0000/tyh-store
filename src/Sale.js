const Accepted = require('./Accepted')
const Cancelled = require('./Cancelled')
const Delivered = require('./Delivered')
const Received = require('./Received')
const TraditionalShipping = require('./TraditionalShipping')

class Sale {
    constructor(customer, rows, date = Date.now()) {
        if (!customer) {
            throw 'Unsufficient parameters: customer should be present!'
        }
        if (!rows) {
            throw 'Unsufficient parameters: rows should be present!'
        }
        this.customer = customer
        this.rows = rows
        this.date = date
        this.acceptedState = new Accepted(this)
        this.cancelledState = new Cancelled(this)
        this.deliveredState = new Delivered(this)
        this.receivedState = new Received(this)
        this.currentState = this.receivedState
        this.paidAt = null
    }

    getCustomer() {
        return this.customer
    }

    getQty() {
        return this.qty
    }

    getRows() {
        return this.rows
    }

    totalCost() {
        return this.rows.reduce((sum, row) => sum + row.calculateCost(), 0)
    }

    getState() {
        return this.currentState
    }

    setState(state) {
        this.currentState = state
    }

    getAcceptedState() {
        return this.acceptedState
    }

    getCancelledState() {
        return this.cancelledState
    }

    getDeliveredState() {
        return this.deliveredState
    }

    getReceivedState() {
        return this.receivedState
    }

    getPaidAt() {
        return this.paidAt
    }

    setPaidAt(paidAt) {
        this.paidAt = paidAt
    }

    setShippingStrategy(sStrategy) {
        this.shippingStrategy = sStrategy
    }

    getShippingStrategy() {
        return this.shippingStrategy
    }

    accept() {
        this.currentState.accept()
    }

    cancel() {
        this.currentState.cancel()
    }

    deliver() {
        this.currentState.deliver()
    }

    receive() {
        this.currentState.receive()
    }
}

module.exports = Sale
