const Immediatedelivery = require('./ImmediateDelivery')
const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
const Sale = require('./Sale')
const SaleRow = require('./SaleRow')
const TraditionalShipping = require('./TraditionalShipping')

let product1, productVariant1, saleRow1, sale1

beforeEach(() => {
    product1 = new Product(10, 'test')
    productVariant1 = new ProductVariant(product1, 'L', 'blue', 'plastic', 50)
    saleRow1 = new SaleRow(productVariant1, 10)
    sale1 = new Sale('test', [saleRow1], Date.now())
    sale1.getState().accept()
    sale1.setShippingStrategy(new Immediatedelivery(sale1))
})

test('Immediate delivery should be the instance of the shipping strategy after instantiating it and assigning it to the sale', () => {
    expect(sale1.getShippingStrategy()).toBeInstanceOf(Immediatedelivery)
})

test('ShippingCost should be 700', () => {
    expect(sale1.getShippingStrategy().shippingCost()).toBe(700)
})

test('DeliveryDate should be 1 day after sale is accepted', () => {
    let acceptedDate = sale1.getPaidAt()
    let deliveryDate = sale1.getShippingStrategy().getDeliveryDate()

    expect(deliveryDate.getDay()).toBe(acceptedDate.getDay() + 1)
})
