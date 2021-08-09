const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
const SaleRow = require('./SaleRow')

let product1, row1

beforeEach(() => {
    product1 = new Product(5, 'test')
    blueBigVariant = new ProductVariant(product1, 'XXL', 'blue')
    row1 = new SaleRow(blueBigVariant)
})

test('All the parameters should be required', () => {
    expect(() => new SaleRow()).toThrow('Unsufficient parameters')
})

test('Should be possible to create a row with a product and a quantity', () => {
    expect(row1.getProductVariant()).toBe(blueBigVariant)
    expect(row1.getQty()).toBe(1)
    expect(row1.calculateCost()).toBe(product1.getPrice())
})
