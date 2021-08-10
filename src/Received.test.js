const Accepted = require('./Accepted')
const Cancelled = require('./Cancelled')
const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
const Received = require('./Received')
const Sale = require('./Sale')
const SaleRow = require('./SaleRow')

let product1, productVariant1, saleRow1, sale1

beforeEach(() => {
    product1 = new Product(10, 'test')
    productVariant1 = new ProductVariant(product1, 'L', 'blue', 'plastic', 50)
    saleRow1 = new SaleRow(productVariant1, 1)
    sale1 = new Sale('test', [saleRow1], Date.now())
})

test('Should require sale on construction', () => {
    expect(() => new Received()).toThrow('Unsufficient parameters')
})

test('Sale should have received state on creation', () => {
    expect(sale1.getState()).toBeInstanceOf(Received)
})

test('Can be cancelled', () => {
    sale1.cancel()
    expect(sale1.getState()).toBeInstanceOf(Cancelled)
})

test('Can be accepted', () => {
    sale1.accept()
    expect(sale1.getState()).toBeInstanceOf(Accepted)
})

test('Can not be delivered', () => {
    expect(() => sale1.deliver().toThrow('Unpermitted Operation'))
})

test('Can not be received again', () => {
    expect(() => sale1.receive().toThrow('Unpermitted Operation'))
})

test('It returns the stock when coming from accepted', () => {
    expect(productVariant1.getStock()).toBe(50)
    sale1.accept()
    expect(productVariant1.getStock()).toBe(49)
    sale1.receive()
    expect(productVariant1.getStock()).toBe(50)
})
