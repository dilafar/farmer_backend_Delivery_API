const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    userId: {
        type: String,
        default: "test",
        
    },
    
    
    title: {
        type: String,
        required: true,
        
    },
    name: {
        type: String,
        default: "test",
        
    },
    desc: {
        type: String,
        required: true,
        
    },
    img:{
        type: String,
        required: true,
    
    },
    categories:{
        type: String,
        required: true,
        
    },
    price:{
        type: Number,
        required: true,
        
    },
    inStock:{
        type:Boolean,
        default: true,
    }
},
{
    timestamps: true
});

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;