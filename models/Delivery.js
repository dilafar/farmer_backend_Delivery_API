const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({

    userId: {
        type: String,
        default: "test",
        
    },
    products: [
        {

        }
    ],
    address: {
        type: String,
        required: true,
        
    },
    
    total:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        default: "pending",
    }
},
{
    timestamps: true
});

const Delivery = mongoose.model("Delivery",DeliverySchema);
module.exports = Delivery;