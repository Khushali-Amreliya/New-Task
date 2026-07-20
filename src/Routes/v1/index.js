const express = require("express")

const productRoutes = require("./Products_routes")

const router = express.Router()

router.use("/products", productRoutes)

module.exports = router