const SaleState = require('./SaleState')
const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
const Sale = require('./Sale')
const SaleRow = require('./SaleRow')

let product1, productVariant1, saleRow1, sale1

beforeEach(() => {
    product1 = new Product(10, 'test')
    productVariant1 = new ProductVariant(product1, 'L', 'blue', 'plastic', 50)
    saleRow1 = new SaleRow(productVariant1, 1)
    sale1 = new Sale('test', [saleRow1], Date.now())
})

test("Should throw error on creation, it's an abstract class", () => {
    const saleState = new SaleState(sale1)

    expect(() => saleState.receive()).toThrow(
        'Should be implemented in child class'
    )
    expect(() => saleState.accept()).toThrow(
        'Should be implemented in child class'
    )
    expect(() => saleState.deliver()).toThrow(
        'Should be implemented in child class'
    )
    expect(() => saleState.cancel()).toThrow(
        'Should be implemented in child class'
    )
    expect(() => saleState.updateStock()).toThrow(
        'Should be implemented in child class'
    )
})
