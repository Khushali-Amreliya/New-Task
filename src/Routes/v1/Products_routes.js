const express = require("express")
const { products_Controller } = require("../../Controller")

const router = express.Router()

router.post("/create_products",products_Controller.controller_products)

module.exports = router