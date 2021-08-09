const ByPercentage = require('./ByPercentage')

let emptySalesSubscription, noParams

beforeEach(() => {
    noParams = new ByPercentage()
    emptySalesSubscription = new ByPercentage(0.25, [])
})

test('Instantiation without parameters should have been created with default params', () => {
    expect(noParams.monthlyCost()).toBe(0)
})

test('Empty sales should return 0', () => {
    expect(emptySalesSubscription.monthlyCost()).toBe(0)
})

test('Subscription with sales minor to limit, should cost the monthly cost', () => {})
