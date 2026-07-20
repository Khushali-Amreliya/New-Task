const { default: mongoose } = require("mongoose")


const product_Schema = mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true
    }
)
 const products = mongoose.model("Products", product_Schema)
 module.exports = products