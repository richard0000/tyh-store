const Accepted = require('./Accepted')
const Cancelled = require('./Cancelled')
const Delivered = require('./Delivered')
const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
const Received = require('./Received')
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

test('Can be accepted', () => {
    sale1.accept()
    expect(sale1.getState()).toBeInstanceOf(Accepted)
})

test('Can be received after accepted', () => {
    sale1.accept()
    sale1.receive()
    expect(sale1.getState()).toBeInstanceOf(Received)
})

test('Can be delivered from accepted only', () => {
    expect(() => sale1.deliver()).toThrow('Unpermitted operation')
    sale1.accept()
    expect(sale1.getState()).toBeInstanceOf(Accepted)
    sale1.deliver()
    expect(sale1.getState()).toBeInstanceOf(Delivered)
})

test('Can be canceled from received', () => {
    sale1.cancel()
    expect(sale1.getState()).toBeInstanceOf(Cancelled)
})

test('Can be canceled from accepted', () => {
    sale1.accept()
    sale1.cancel()
    expect(sale1.getState()).toBeInstanceOf(Cancelled)
})

test('Can not be canceled from delivered', () => {
    sale1.accept()
    sale1.deliver()
    expect(() => sale1.cancel()).toThrow('Unpermitted operation')
})

test('Can not change state from cancelled', () => {
    sale1.cancel()
    expect(() => sale1.accept()).toThrow('Unpermitted operation')
    expect(() => sale1.receive()).toThrow('Unpermitted operation')
    expect(() => sale1.deliver()).toThrow('Unpermitted operation')
})
