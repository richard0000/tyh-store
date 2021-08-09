const BySalesQty = require('./BySalesQty')

let emptySalesSubscription, lessSalesThanLimit, noParams

beforeEach(() => {
    noParams = new BySalesQty()
    emptySalesSubscription = new BySalesQty(5.0, 3000.0, [], 100)

    lessSalesThanLimit = new BySalesQty(5.0, 3000.0, [], 2)
})

test('Instantiation without parameters should have been created with default params', () => {
    expect(noParams.getCostPerUpsell()).toBe(1)
    expect(noParams.getMonthlySubscriptionCost()).toBe(200)
    expect(noParams.getSales()).toEqual([])
    expect(noParams.getSalesLimit()).toBe(300)
})

test('Empty sales should return exactly the monthlyCost', () => {
    expect(emptySalesSubscription.monthlyCost()).toBe(
        emptySalesSubscription.getMonthlySubscriptionCost()
    )
    expect(emptySalesSubscription.getCostPerUpsell()).toBe(5)
    expect(emptySalesSubscription.getMonthlySubscriptionCost()).toBe(3000)
    expect(emptySalesSubscription.getSales()).toEqual([])
    expect(emptySalesSubscription.getSalesLimit()).toBe(100)
})

test('Subscription with sales minor to limit, should cost the monthly cost', () => {})

test('Subscription with sales more than the limit, should cost the monthly cost plus sales qty multiplied by upsell cost', () => {})
