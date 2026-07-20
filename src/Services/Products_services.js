
const { Products } = require("../Model")

const create_Products = (data) => {
    return Products.create(data)
}

module.exports = {
    create_Products
}