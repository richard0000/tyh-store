const Product = require('./Product')
const ProductVariant = require('./ProductVariant')
let product1, blueBigVariant, redSmallVariant, aHundredStock

beforeEach(() => {
    product1 = new Product(5, 'test')
    blueBigVariant = new ProductVariant(product1, 'XXL', 'blue')
    redSmallVariant = new ProductVariant(product1, 'S', 'red')
    aHundredStock = new ProductVariant(product1, 'S', 'pink', 'cotton', 100)
})

test('Create a blue XXL variant', () => {
    expect(blueBigVariant.getProduct()).toBe(product1)
    expect(blueBigVariant.getColor()).toBe('blue')
    expect(blueBigVariant.getSize()).toBe('XXL')
    expect(blueBigVariant.getStock()).toBe(0)
})

test('Create a red S variant', () => {
    expect(redSmallVariant.getProduct()).toBe(product1)
    expect(redSmallVariant.getColor()).toBe('red')
    expect(redSmallVariant.getSize()).toBe('S')
    expect(redSmallVariant.getStock()).toBe(0)
})

test('Create a product with 100 as stock', () => {
    expect(aHundredStock.getStock()).toBe(100)
})

test('Stock can be updated', () => {
    aHundredStock.setStock(80)
    expect(aHundredStock.getStock()).toBe(80)
})
