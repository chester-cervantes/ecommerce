require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product')

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        console.log("Importing data...")
        await Product.insertMany(productsData);
        console.log("Data Import Process SUCCESS")

        process.exit();
    } catch (error) {
        console.log("Data Import Process FAIL", error)

        process.exit(1);
    }
}

importData();