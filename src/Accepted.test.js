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
    saleRow1 = new SaleRow(productVariant1, 10)
    sale1 = new Sale('test', [saleRow1], Date.now())
    sale1.getState().accept()
})

test('Should require sale on construction', () => {
    expect(() => new Accepted()).toThrow('Unsufficient parameters')
})

test('Can be received', () => {
    expect(productVariant1.getStock()).toBe(40)
    sale1.getState().receive()
    expect(sale1.getState()).toBeInstanceOf(Received)
    expect(productVariant1.getStock()).toBe(50)
})

test('Can be delivered', () => {
    sale1.getState().deliver()
    expect(sale1.getState()).toBeInstanceOf(Delivered)
    let deliveredDate = sale1.getState().getDeliveredDate()
    let today = new Date()
    expect(deliveredDate.getDay()).toBe(today.getDay())
    expect(deliveredDate.getMonth()).toBe(today.getMonth())
    expect(deliveredDate.getFullYear()).toBe(today.getFullYear())
})

test('Can be cancelled', () => {
    sale1.getState().cancel()
    expect(sale1.getState()).toBeInstanceOf(Cancelled)
})

test('Can not be accepted again', () => {
    expect(() => sale1.getState().accept()).toThrow('Unpermitted operation')
})

test('Paid at should be today, now', () => {
    let today = new Date()
    let salePaidAt = sale1.getPaidAt()
    expect(salePaidAt.getDay()).toBe(today.getDay())
    expect(salePaidAt.getMonth()).toBe(today.getMonth())
    expect(salePaidAt.getFullYear()).toBe(today.getFullYear())
})
