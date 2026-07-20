const { Product_services } = require("../Services")

const controller_products = async (req, res) => {
    try {
        const data = req.body
        const new_p = await Product_services.create_Products(data)

        res.status(200).json({
            message: "Created successfully",
            success: true,
            data: new_p
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
}

module.exports = {
    controller_products
}