const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
const Sale = require('./Sale')
const SaleRow = require('./SaleRow')
const StoreWithdrawal = require('./StoreWithdrawal')

let sStrategy, product1, productVariant1, saleRow1, sale1

beforeEach(() => {
    product1 = new Product(10, 'test')
    productVariant1 = new ProductVariant(product1, 'L', 'blue', 'plastic', 50)
    saleRow1 = new SaleRow(productVariant1, 10)
    sale1 = new Sale('test', [saleRow1], Date.now())
    sStrategy = new StoreWithdrawal(sale1, new Date('December 17, 1995'))
    sale1.setShippingStrategy(sStrategy)
})

test('ShippingCost should be 0', () => {
    expect(sStrategy.shippingCost()).toBe(0)
})

test('Delivery date should be the same as withdrawal date', () => {
    let withdrawalDate = sStrategy.getWithdrawalDate()
    expect(withdrawalDate.getMonth()).toBe(11)
    expect(withdrawalDate.getFullYear()).toBe(1995)
    expect(sStrategy.getDeliveryDate()).toBe(sStrategy.getWithdrawalDate())
})
