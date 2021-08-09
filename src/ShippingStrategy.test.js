const ShippingStrategy = require('./ShippingStrategy')

test("Should throw error on creation, it's an abstract class", () => {
    let sStrategy = new ShippingStrategy()
    expect(() => sStrategy.shippingCost()).toThrow(
        'Must be defined in child classes'
    )
    expect(sStrategy.getDeliveryDate()).toBeUndefined()
})
