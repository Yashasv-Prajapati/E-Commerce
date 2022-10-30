const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    productPrice: Number,
    productBrand: String,
    productDeliveryType: String,
    userId: String
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;