const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
const Sale = require('./Sale')
const SaleRow = require('./SaleRow')

let product1, productVariant1, saleRow1, sale1

beforeEach(() => {
    product1 = new Product(10, 'test')
    productVariant1 = new ProductVariant(product1, 'L', 'blue', 'plastic', 50)
    saleRow1 = new SaleRow(productVariant1)
    sale1 = new Sale('test', [saleRow1], new Date())
})

test('Prevent creation on required parameters', () => {
    expect(() => new Sale()).toThrow('Unsufficient parameters')
})

test('Can create a sale with 1 product', () => {
    expect(sale1.getRows().length).toBe(1)
    expect(sale1.totalCost()).toBe(product1.getPrice())
})
