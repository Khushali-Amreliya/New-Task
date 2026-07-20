const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://amreliyakhushali:hi9EvLK2doXPya2a@cluster0.muzbcpc.mongodb.net/new");

        console.log("Database connected successfully");
    } catch (err) {
        console.log("Database connection failed:", err.message);
    }
};

module.exports = connectDB;