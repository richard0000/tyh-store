const Subscription = require('./Subscription')

test('Should throw error on monthlyCost (parent class, abstract)', () => {
    let subscription = new Subscription()
    expect(() => {
        subscription.monthlyCost()
    }).toThrow('Must be defined in child classes')
})
