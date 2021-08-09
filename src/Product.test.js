let Product = require('./Product')
let ProductVariant = require('./ProductVariant')

let product

beforeEach(() => {
    product = new Product(5, 'test')
})

test('Can be created', () => {
    expect(product.name).toBe('test')
    expect(product.price).toBe(5)
})

test('Should fail creation if price is not provided', () => {
    expect(() => new Product('test')).toThrow('Unsufficient parameters')
})
