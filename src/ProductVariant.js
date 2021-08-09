class ProductVariant {
    constructor(product, size, color, material, stock = 0) {
        if (!product) {
            throw 'Unsufficient parameters: product should be present!'
        }
        if (!size) {
            throw 'Unsufficient parameters: size should be present!'
        }
        if (!color) {
            throw 'Unsufficient parameters: color should be present!'
        }

        this.product = product
        this.size = size
        this.color = color
        this.material = material
        this.stock = stock
    }

    getColor() {
        return this.color
    }

    getMaterial() {
        return this.material
    }

    getProduct() {
        return this.product
    }

    getSize() {
        return this.size
    }

    getStock() {
        return this.stock
    }

    setStock(stock) {
        this.stock = stock
    }
}

module.exports = ProductVariant
