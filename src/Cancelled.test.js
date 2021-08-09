const Cancelled = require('./Cancelled')
const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
const Sale = require('./Sale')
const SaleRow = require('./SaleRow')

let product1, productVariant1, saleRow1, sale1

beforeEach(() => {
    product1 = new Product(10, 'test')
    productVariant1 = new ProductVariant(product1, 'L', 'blue', 'plastic', 50)
    saleRow1 = new SaleRow(productVariant1, 10)
    sale1 = new Sale('test', [saleRow1], Date.now())
    sale1.getState().cancel()
})

test('Should require sale on construction', () => {
    expect(() => new Cancelled()).toThrow('Unsufficient parameters')
})

test('Can not be accepted', () => {
    expect(() => sale1.getState().accept()).toThrow('Unpermitted operation')
})

test('Can not be cancelled again', () => {
    expect(() => sale1.getState().cancel()).toThrow('Unpermitted operation')
})

test('Can not be delivered', () => {
    expect(() => sale1.getState().deliver()).toThrow('Unpermitted operation')
})

test('Can not be received', () => {
    expect(() => sale1.getState().receive()).toThrow('Unpermitted operation')
})

test('Does not update the stock', () => {
    expect(() => sale1.getState().updateStock()).toThrow(
        'Unpermitted operation'
    )
})
